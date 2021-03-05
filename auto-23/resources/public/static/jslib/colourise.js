/* Hook into our ClojureScript code to pull out colour palette information,
   and apply via jQuery. */

$(function() {
    for (var i = 0; i < net.cassiel.auto_23.patterns.total_num_discs; i++) {
        var background = net.cassiel.auto_23.components.svg_base.fill_colour_for(i, 0);
        var border = net.cassiel.auto_23.components.svg_base.fill_colour_for(i, -0.3);
        var text = net.cassiel.auto_23.components.svg_base.text_colour_for(i);

        console.log("id: " + (i + 1)
                    + " text: " + text
                    + " bg: " + background
                    + " border: " + border);

        $("span.id_" + (i + 1))
            .css("color", text)
            .css('background-color', background)
            .css('border-color', border);
    }

    // Grey out everything not displayed in the disc:

    for (var i = net.cassiel.auto_23.patterns.display_num_discs;
         i < net.cassiel.auto_23.patterns.total_num_discs;
         i++) {
        $("span.iconised:nth-child(" + (i + 1) + ")")
            .css("color", "#A0A0A0")
            .css("border-color", "#A0A0A0")
            .css("background-color", "white");
    }
});
