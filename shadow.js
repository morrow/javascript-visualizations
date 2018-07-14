window.moveShadow = (e)=> {
  // maxmimum shadow distance
  let max_shadow = 30
  // shadow color
  let color = 'rgba(0,0,0,0.5)'
  // get center window position
  let center_x = window.innerWidth / 2
  let center_y = window.innerHeight / 2
  // calculate shadows from mouse position
  let shadow_x = (center_x - e.clientX) / (max_shadow * 2)
  let shadow_y = (center_y - e.clientY) / (max_shadow * 2)
  // keep shadow distabce less than max_shadow
  shadow_x = Math.min(max_shadow, Math.max(-max_shadow, shadow_x))
  shadow_y = Math.min(max_shadow, Math.max(-max_shadow, shadow_y))
  // calculate shadow radius
  shadow_radius = Math.abs(shadow_x) + Math.abs(shadow_y)
  // update css property for textShadow
  window.target.style.textShadow = `${shadow_x}px ${shadow_y}px ${shadow_radius}px ${color}`
}

window.onmousemove = window.moveShadow
