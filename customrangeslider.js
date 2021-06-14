var range = document.getElementById('range')

range.addEventListener('input', (e) => {
    var value = +e.target.value
    var label = e.target.nextElementSibling

    var range_width = getComputedStyle(e.target).getPropertyValue('width')
    var label_width = getComputedStyle(label).getPropertyValue('width')

    console.log(range_width, label_width)
    var num_width = +range_width.substring(0, range_width.length - 2)
    var num_label_width = +label_width.substring(0, label_width.length - 2)
    var max = +e.target.max
    var min = +e.target.min

    var left = value * (num_width / max) - num_label_width / 2 + Scale(value, min, max, 10, -10)

    label.style.left = `${left}px`

     label.innerHTML = value

})

     var Scale = (num, in_min, in_max, out_min, out_max) => {
         return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
     }