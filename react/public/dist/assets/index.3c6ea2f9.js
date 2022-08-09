const ee = function () {
	const t = document.createElement('link').relList
	if (t && t.supports && t.supports('modulepreload')) return
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
	new MutationObserver((i) => {
		for (const s of i)
			if (s.type === 'childList')
				for (const l of s.addedNodes)
					l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(i) {
		const s = {}
		return (
			i.integrity && (s.integrity = i.integrity),
			i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy),
			i.crossorigin === 'use-credentials'
				? (s.credentials = 'include')
				: i.crossorigin === 'anonymous'
				? (s.credentials = 'omit')
				: (s.credentials = 'same-origin'),
			s
		)
	}
	function r(i) {
		if (i.ep) return
		i.ep = !0
		const s = n(i)
		fetch(i.href, s)
	}
}
ee()
function y() {}
function U(e) {
	return e()
}
function z() {
	return Object.create(null)
}
function j(e) {
	e.forEach(U)
}
function te(e) {
	return typeof e == 'function'
}
function M(e, t) {
	return e != e
		? t == t
		: e !== t || (e && typeof e == 'object') || typeof e == 'function'
}
let k
function ne(e, t) {
	return k || (k = document.createElement('a')), (k.href = t), e === k.href
}
function re(e) {
	return Object.keys(e).length === 0
}
function c(e, t) {
	e.appendChild(t)
}
function q(e, t, n) {
	e.insertBefore(t, n || null)
}
function w(e) {
	e.parentNode.removeChild(e)
}
function m(e) {
	return document.createElement(e)
}
function O(e) {
	return document.createTextNode(e)
}
function $() {
	return O(' ')
}
function oe(e, t, n, r) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
}
function h(e, t, n) {
	n == null
		? e.removeAttribute(t)
		: e.getAttribute(t) !== n && e.setAttribute(t, n)
}
function ie(e) {
	return Array.from(e.childNodes)
}
function se(e, t) {
	;(t = '' + t), e.wholeText !== t && (e.data = t)
}
let B
function x(e) {
	B = e
}
const b = [],
	D = [],
	A = [],
	G = [],
	le = Promise.resolve()
let T = !1
function ce() {
	T || ((T = !0), le.then(W))
}
function V(e) {
	A.push(e)
}
const N = new Set()
let S = 0
function W() {
	const e = B
	do {
		for (; S < b.length; ) {
			const t = b[S]
			S++, x(t), ue(t.$$)
		}
		for (x(null), b.length = 0, S = 0; D.length; ) D.pop()()
		for (let t = 0; t < A.length; t += 1) {
			const n = A[t]
			N.has(n) || (N.add(n), n())
		}
		A.length = 0
	} while (b.length)
	for (; G.length; ) G.pop()()
	;(T = !1), N.clear(), x(e)
}
function ue(e) {
	if (e.fragment !== null) {
		e.update(), j(e.before_update)
		const t = e.dirty
		;(e.dirty = [-1]),
			e.fragment && e.fragment.p(e.ctx, t),
			e.after_update.forEach(V)
	}
}
const C = new Set()
let fe
function I(e, t) {
	e && e.i && (C.delete(e), e.i(t))
}
function X(e, t, n, r) {
	if (e && e.o) {
		if (C.has(e)) return
		C.add(e),
			fe.c.push(() => {
				C.delete(e), r && (n && e.d(1), r())
			}),
			e.o(t)
	} else r && r()
}
function Y(e) {
	e && e.c()
}
function P(e, t, n, r) {
	const { fragment: i, on_mount: s, on_destroy: l, after_update: d } = e.$$
	i && i.m(t, n),
		r ||
			V(() => {
				const u = s.map(U).filter(te)
				l ? l.push(...u) : j(u), (e.$$.on_mount = [])
			}),
		d.forEach(V)
}
function H(e, t) {
	const n = e.$$
	n.fragment !== null &&
		(j(n.on_destroy),
		n.fragment && n.fragment.d(t),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []))
}
function ae(e, t) {
	e.$$.dirty[0] === -1 && (b.push(e), ce(), e.$$.dirty.fill(0)),
		(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31)
}
function K(e, t, n, r, i, s, l, d = [-1]) {
	const u = B
	x(e)
	const o = (e.$$ = {
		fragment: null,
		ctx: null,
		props: s,
		update: y,
		not_equal: i,
		bound: z(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(t.context || (u ? u.$$.context : [])),
		callbacks: z(),
		dirty: d,
		skip_bound: !1,
		root: t.target || u.$$.root,
	})
	l && l(o.root)
	let a = !1
	if (
		((o.ctx = n
			? n(e, t.props || {}, (f, p, ...v) => {
					const _ = v.length ? v[0] : p
					return (
						o.ctx &&
							i(o.ctx[f], (o.ctx[f] = _)) &&
							(!o.skip_bound && o.bound[f] && o.bound[f](_), a && ae(e, f)),
						p
					)
			  })
			: []),
		o.update(),
		(a = !0),
		j(o.before_update),
		(o.fragment = r ? r(o.ctx) : !1),
		t.target)
	) {
		if (t.hydrate) {
			const f = ie(t.target)
			o.fragment && o.fragment.l(f), f.forEach(w)
		} else o.fragment && o.fragment.c()
		t.intro && I(e.$$.fragment), P(e, t.target, t.anchor, t.customElement), W()
	}
	x(u)
}
class F {
	$destroy() {
		H(this, 1), (this.$destroy = y)
	}
	$on(t, n) {
		const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
		return (
			r.push(n),
			() => {
				const i = r.indexOf(n)
				i !== -1 && r.splice(i, 1)
			}
		)
	}
	$set(t) {
		this.$$set &&
			!re(t) &&
			((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1))
	}
}
const de = '/assets/svelte.a39f39b7.svg'
function me(e) {
	let t
	return {
		c() {
			t =
				O(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sit obcaecati
facilis ducimus cupiditate amet ratione tempore magnam sint porro. Veniam
delectus, hic debitis dolorem saepe quibusdam impedit eaque cupiditate?`)
		},
		m(n, r) {
			q(n, t, r)
		},
		p: y,
		i: y,
		o: y,
		d(n) {
			n && w(t)
		},
	}
}
class pe extends F {
	constructor(t) {
		super(), K(this, t, null, me, M, {})
	}
}
function he(e) {
	let t, n, r, i, s, l, d, u
	return (
		(s = new pe({})),
		{
			c() {
				;(t = m('button')),
					(n = O('count is ')),
					(r = O(e[0])),
					(i = $()),
					Y(s.$$.fragment)
			},
			m(o, a) {
				q(o, t, a),
					c(t, n),
					c(t, r),
					q(o, i, a),
					P(s, o, a),
					(l = !0),
					d || ((u = oe(t, 'click', e[1])), (d = !0))
			},
			p(o, [a]) {
				;(!l || a & 1) && se(r, o[0])
			},
			i(o) {
				l || (I(s.$$.fragment, o), (l = !0))
			},
			o(o) {
				X(s.$$.fragment, o), (l = !1)
			},
			d(o) {
				o && w(t), o && w(i), H(s, o), (d = !1), u()
			},
		}
	)
}
function ge(e, t, n) {
	let r = 0
	return [
		r,
		() => {
			n(0, (r += 1))
		},
	]
}
class _e extends F {
	constructor(t) {
		super(), K(this, t, ge, he, M, {})
	}
}
function $e(e) {
	let t, n, r, i, s, l, d, u, o, a, f, p, v, _, R, L, E
	return (
		(p = new _e({})),
		{
			c() {
				;(t = m('main')),
					(n = m('div')),
					(r = m('a')),
					(r.innerHTML =
						'<img src="/vite.svg" class="logo svelte-c9fbf7" alt="Vite Logo"/>'),
					(i = $()),
					(s = m('a')),
					(l = m('img')),
					(u = $()),
					(o = m('h1')),
					(o.textContent = 'Vite + Svelte'),
					(a = $()),
					(f = m('div')),
					Y(p.$$.fragment),
					(v = $()),
					(_ = m('p')),
					(_.innerHTML =
						'Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!'),
					(R = $()),
					(L = m('p')),
					(L.textContent = 'Click on the Vite and Svelte logos to learn more'),
					h(r, 'href', 'https://vitejs.dev'),
					h(r, 'target', '_blank'),
					ne(l.src, (d = de)) || h(l, 'src', d),
					h(l, 'class', 'logo svelte svelte-c9fbf7'),
					h(l, 'alt', 'Svelte Logo'),
					h(s, 'href', 'https://svelte.dev'),
					h(s, 'target', '_blank'),
					h(f, 'class', 'card'),
					h(L, 'class', 'read-the-docs svelte-c9fbf7')
			},
			m(g, Z) {
				q(g, t, Z),
					c(t, n),
					c(n, r),
					c(n, i),
					c(n, s),
					c(s, l),
					c(t, u),
					c(t, o),
					c(t, a),
					c(t, f),
					P(p, f, null),
					c(t, v),
					c(t, _),
					c(t, R),
					c(t, L),
					(E = !0)
			},
			p: y,
			i(g) {
				E || (I(p.$$.fragment, g), (E = !0))
			},
			o(g) {
				X(p.$$.fragment, g), (E = !1)
			},
			d(g) {
				g && w(t), H(p)
			},
		}
	)
}
class ye extends F {
	constructor(t) {
		super(), K(this, t, null, $e, M, {})
	}
}
var J, Q
const ve =
	(Q =
		(J = document.querySelector('mfe-connector')) == null
			? void 0
			: J.shadowRoot) == null
		? void 0
		: Q.getElementById('svelte-app')
document.getElementById('svelte-app')
new ye({ target: ve })
