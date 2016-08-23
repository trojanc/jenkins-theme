document.observe("dom:loaded", function () {

    // If the side panel is hidden, make main panel fill the screen
    if($$("#side-panel")[0] && Element.getStyle($$("#side-panel")[0], "display") == "none"){
        Element.setStyle($$("#main-panel")[0], {'margin-left' : 0})
    }
})
