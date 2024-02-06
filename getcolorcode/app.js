const getcolor1 = () => {
  const color1 = (document.getElementById('color1').style.backgroundcolor =
    '#33367676')
  console.log(color1)
  navigator.clipboard.writeText(color1)
}

document.getElementById('color1').addEventListener('click', getcolor1)

const getcolor2 = () => {
  const color2 = (document.getElementById('color2').style.backgroundcolor =
    '#376')
  console.log(color2)
  navigator.clipboard.writeText(color2)
}

document.getElementById('color2').addEventListener('click', getcolor2)

const getcolor3 = () => {
  const color3 = (document.getElementById('color3').style.backgroundcolor =
    '#898980;')
  console.log(color3)
  navigator.clipboard.writeText(color3)
}

document.getElementById('color3').addEventListener('click', getcolor3)
const getcolor4 = () => {
  const color4 = (document.getElementById('color4').style.backgroundcolor =
    ' #f89555;')
  console.log(color4)
  navigator.clipboard.writeText(color4)
}

document.getElementById('color4').addEventListener('click', getcolor4)
const getcolor5 = () => {
  const color5 = (document.getElementById('color5').style.backgroundcolor =
    ' #46e19e;')
  console.log(color5)
  navigator.clipboard.writeText(color5)
}

document.getElementById('color5').addEventListener('click', getcolor5)
