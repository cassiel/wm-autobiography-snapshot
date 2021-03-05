from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
import pymongo
import datetime
import os

# Host configuration vars, set up on Heroku or entered here on the command line.
# Many have defaults here for convenience, although the Heroku config. should be exhaustive.

ON_HEROKU = "ON_HEROKU" in os.environ

def key(id, default):
    return (os.environ[id] if id in os.environ else default)

DB_USER = key("DB_USER", "wm_user")
DB_PASS = os.environ["DB_PASS"]         # No default.
DB_HOST = key("DB_HOST", "wm-auto-tsgej.mongodb.net")
DB_NAME = key("DB_NAME", "wm_auto")
DB_COLL = key("DB_COLL", "auto_collection")
DB_OPTS = "?retryWrites=true&w=majority"

uri = "mongodb+srv://%s:%s@%s/%s%s" % (DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_OPTS)

client = pymongo.MongoClient(uri)
db = client[DB_NAME]

app = Flask(__name__, static_url_path='/static')
CORS(app)

def discs_to_ordered_labels(data):
    result = []
    l = len(data)
    for i in range(l):
        for j in range(l):
            d = data[j]
            if d['pos'] == i: result.append("%d" % (j + 1))

    return result

def sanitise_entry(x):
    print(x)

    sanitised = {
        "id"     : x["index"],
        "date"   : x["date"].strftime("%d %b %Y %H:%M:%S"),
        "legend" : " ".join(x["data"]["legend"]),
        "discs"  : discs_to_ordered_labels(x["data"]["discs"])
    }

    x["sanitised"] = sanitised
    return x

@app.route('/list')
def list():
    collection = db[DB_COLL]
    data = [sanitise_entry(dict(x)) for x in collection.find().sort("date", pymongo.DESCENDING)]
    return render_template('list.html', data=data)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/exchange', methods=['POST'])
def exchange():
    d = request.get_json()
    index = d['index']
    collection = db[DB_COLL]

    candidate = collection.find_one({'index' : index})

    if candidate == None:
        #print("NEW")
        #print(dict(d))
        d2 = dict(d)
        d2["date"] = datetime.datetime.utcnow()
        collection.insert_one(d2)
        return jsonify(d)
    else:
        #print("EXISTING")
        #print(candidate)
        # Lose the _id which doesn't convert to JSON cleanly:
        return jsonify({'index' : index,
                        'type' : "ANY",
                        'data' : candidate['data']})

if (not ON_HEROKU) and __name__ == "__main__":
    app.run(debug=True)
