
const valid = {
    install(Vue) {
        this.setDirective(Vue);
        this.Vue = Vue;
    },
    setDirective(Vue) {
        Vue.directive('valid', {
            inserted: (el, binding, vnode) => {
                // console.log(Object.prototype.toString.call(el));
                console.log(vnode.context.$options.rules);
                console.log(binding.value);
                console.log(vnode.context);
            }
        });
        Vue.directive('color', {
            inserted: (el, binding, vnode) => {
                el.style.color = binding.value;
            }
        });
    }
};
export default valid;