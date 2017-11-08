
export const autofocus = {
	directive: {
		'auto-focus': {
			bind: (el, binding) => {
				el.focus()
			}
		}
	}
}