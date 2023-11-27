# be-setting [TODO]

## Use case

Derive initial state from server streamed HTML.

Binding to microdata is useful for

1.  Styling
2.  Providing declarative custom elements (WIP).
3.  Search engine accuracy
4.  Hydrating while HTML streams in without FOUC.
5.  Can serialize state from the server to the browser without requiring all properties of the custom element to have an attribute equivalent.

> [!Note]
> This element enhancement would probably be most effective if it could be partly applied in a Cloudflare or Bun or Deno worker and/or a service worker, [w3c willing](https://github.com/whatwg/dom/issues/1222). 

## Example 1a: [TODO]

```html
<mood-stone>
    <template shadowrootmode=open>
    <input disabled be-setting='is happy from initial value of disabled.'>
    </template>
</mood-stone>
```

What this does:

Sets host's isHappy property to true, and then flies away into the sunset.  **It does not attempt to keep future changes to the input's disabled property in sync.**

## Example 1b: [TODO]

```html
<div>
<input disabled be-setting='$ is happy from initial value of disabled.'>
</div>
```

... generates:

```html
<div itemscope>
<input disabled be-setting='$ is happy from initial value of disabled.'>
<link itemprop="isHappy" href="https://schema.org/True">
</div>
```

Only adds the link itemprop tag if not already found in stream.  So if the server generates the link tag (without the value), safest to set it before the input element adorned by the be-setting enhancement.

## Example 1c:  Combining 1a and 1b: [TODO]

```html
<mood-stone>
    #shadow
       <input disabled be-setting='of is happy from initial value of disabled, observed by $ is in nirvana.'>
</mood-stone>
```

This will both set the host's isHappy property to true, *and* create the link itemprop tag, the equivalent of:

```html
<mood-stone>
    #shadow
       <input disabled be-setting='of is happy from disabled, observed by $ is in nirvana.'>
       <link itemprop=isInNirvana be-observant='of is happy.'>
</mood-stone>
```

## Example 1d:  

```html
<mood-stone>
    #shadow
       <link itemprop=isInNirvana be-setting='of is happy from $0:signalValue, observed by $ is in nirvana.'>
</mood-stone>
```

This is just two-way binding, it seems, so use be-bound instead?
