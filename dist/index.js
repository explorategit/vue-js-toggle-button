(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(".vue-js-switch[data-v-648af4db]{display:inline-block;position:relative;vertical-align:middle;user-select:none;font-size:10px;cursor:pointer}.vue-js-switch .v-switch-input[data-v-648af4db]{opacity:0;position:absolute;width:1px;height:1px}.vue-js-switch .v-switch-label[data-v-648af4db]{position:absolute;top:0;font-weight:600;color:#fff;z-index:1}.vue-js-switch .v-switch-label.v-left[data-v-648af4db]{left:10px}.vue-js-switch .v-switch-label.v-right[data-v-648af4db]{right:10px}.vue-js-switch .v-switch-core[data-v-648af4db]{display:block;position:relative;box-sizing:border-box;outline:0;margin:0;transition:border-color .3s,background-color .3s;user-select:none}.vue-js-switch .v-switch-core .v-switch-button[data-v-648af4db]{display:block;position:absolute;overflow:hidden;top:0;left:0;border-radius:100%;background-color:#fff;z-index:2}.vue-js-switch.disabled[data-v-648af4db]{pointer-events:none;opacity:.6}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { openBlock as i, createElementBlock as h, normalizeClass as E, withKeys as v, withModifiers as y, createElementVNode as g, normalizeStyle as a, Fragment as B, renderSlot as C, createTextVNode as k, toDisplayString as m, createCommentVNode as T } from "vue";
const p = (e) => typeof e == "string", f = (e) => typeof e == "object", n = (e, t) => f(e) && e.hasOwnProperty(t), o = (e, t, s) => n(e, t) ? e[t] : s, r = (e) => `${e}px`, w = (e, t) => `translate(${e}, ${t})`;
const U = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [c, d] of t)
    s[c] = d;
  return s;
}, _ = "#75c791", D = "#bfcbd9", L = "on", N = "off", b = "#fff", O = {
  name: "ToggleButton",
  props: {
    value: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String
    },
    sync: {
      type: Boolean,
      default: !1
    },
    speed: {
      type: Number,
      default: 300
    },
    color: {
      type: [String, Object],
      validator(e) {
        return p(e) || n(e, "checked") || n(e, "unchecked") || n(e, "disabled");
      }
    },
    switchColor: {
      type: [String, Object],
      validator(e) {
        return p(e) || n(e, "checked") || n(e, "unchecked");
      }
    },
    cssColors: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: [Boolean, Object],
      default: !1,
      validator(e) {
        return typeof e == "object" ? e.checked || e.unchecked : typeof e == "boolean";
      }
    },
    height: {
      type: Number,
      default: 22
    },
    width: {
      type: Number,
      default: 50
    },
    margin: {
      type: Number,
      default: 3
    },
    fontSize: {
      type: Number
    }
  },
  computed: {
    className() {
      let { toggled: e, disabled: t } = this;
      return [
        "vue-js-switch",
        {
          toggled: e,
          disabled: t
        }
      ];
    },
    coreStyle() {
      return {
        width: r(this.width),
        height: r(this.height),
        backgroundColor: this.cssColors ? null : this.disabled ? this.colorDisabled : this.colorCurrent,
        borderRadius: r(Math.round(this.height / 2))
      };
    },
    buttonRadius() {
      return this.height - this.margin * 2;
    },
    distance() {
      return r(this.width - this.height + this.margin);
    },
    buttonStyle() {
      const e = `transform ${this.speed}ms`, t = r(this.margin), s = this.toggled ? w(this.distance, t) : w(t, t), c = this.switchColor ? this.switchColorCurrent : null;
      return {
        width: r(this.buttonRadius),
        height: r(this.buttonRadius),
        transition: e,
        transform: s,
        background: c
      };
    },
    labelStyle() {
      return {
        lineHeight: r(this.height),
        fontSize: this.fontSize ? r(this.fontSize) : null
      };
    },
    colorChecked() {
      let { color: e } = this;
      return f(e) ? o(e, "checked", _) : e || _;
    },
    colorUnchecked() {
      return o(this.color, "unchecked", D);
    },
    colorDisabled() {
      return o(this.color, "disabled", this.colorCurrent);
    },
    colorCurrent() {
      return this.toggled ? this.colorChecked : this.colorUnchecked;
    },
    labelChecked() {
      return o(this.labels, "checked", L);
    },
    labelUnchecked() {
      return o(this.labels, "unchecked", N);
    },
    switchColorChecked() {
      return o(this.switchColor, "checked", b);
    },
    switchColorUnchecked() {
      return o(this.switchColor, "unchecked", b);
    },
    switchColorCurrent() {
      return f(this.switchColor) ? this.toggled ? this.switchColorChecked : this.switchColorUnchecked : this.switchColor || b;
    }
  },
  watch: {
    value(e) {
      this.sync && (this.toggled = !!e);
    }
  },
  data() {
    return {
      toggled: !!this.value
    };
  },
  methods: {
    keyToggle(e) {
      this.disabled || this.toggle(e);
    },
    toggle(e) {
      const t = !this.toggled;
      this.sync || (this.toggled = t), this.$emit("input", t), this.$emit("change", {
        value: t,
        tag: this.tag,
        srcEvent: e
      });
    }
  }
}, x = ["name", "checked", "disabled"];
function A(e, t, s, c, d, l) {
  return i(), h("label", {
    class: E(l.className),
    tabindex: "0",
    role: "checkbox",
    onKeydown: t[1] || (t[1] = v(y((...u) => l.keyToggle && l.keyToggle(...u), ["prevent"]), ["space"]))
  }, [
    g("input", {
      type: "checkbox",
      class: "v-switch-input",
      name: s.name,
      checked: s.value,
      disabled: s.disabled,
      tabindex: "-1",
      onChange: t[0] || (t[0] = y((...u) => l.toggle && l.toggle(...u), ["stop"]))
    }, null, 40, x),
    g("div", {
      class: "v-switch-core",
      style: a(l.coreStyle)
    }, [
      g("div", {
        class: "v-switch-button",
        style: a(l.buttonStyle)
      }, null, 4)
    ], 4),
    s.labels ? (i(), h(B, { key: 0 }, [
      d.toggled ? (i(), h("span", {
        key: 0,
        class: "v-switch-label v-left",
        style: a(l.labelStyle)
      }, [
        C(e.$slots, "checked", {}, () => [
          k(m(l.labelChecked), 1)
        ], !0)
      ], 4)) : (i(), h("span", {
        key: 1,
        class: "v-switch-label v-right",
        style: a(l.labelStyle)
      }, [
        C(e.$slots, "unchecked", {}, () => [
          k(m(l.labelUnchecked), 1)
        ], !0)
      ], 4))
    ], 64)) : T("", !0)
  ], 34);
}
const R = /* @__PURE__ */ U(O, [["render", A], ["__scopeId", "data-v-648af4db"]]);
let S = !1;
const F = {
  install(e) {
    S || (e.component("ToggleButton", R), S = !0);
  }
};
export {
  F as default
};
