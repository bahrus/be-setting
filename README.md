# be-setting [TODO]

## Use case

Make server rendered html attributes generate and/or bind to  microdata and form elements.

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
<my-custom-element>
    <template shadowrootmode=open>
    <input disabled be-setting='is vegetarian from disabled.'>
    </template>
</my-custom-element>
```

What this does:

Sets host's isVegetarian property to true, and then flies away into the sunset.  **It does not attempt to keep future changes to the input's disabled property in sync.**

## Example 1b: [TODO]

```html
<div>
<input disabled be-setting='is vegetarian from disabled.'>
</div>
```

... generates:

```html
<div itemscope>
<input disabled be-setting='$ is vegetarian from disabled.'>
<link itemprop="isVegetarian" href="https://schema.org/True">
</div>
```

Only adds the link itemprop tag if not already found in stream.  So if the server generates the link tag (without the value), safest to set it before the input element adorned by the be-setting enhancement.

## Example 1c:  Combining 1a and 1b: [TODO]

```html
<my-custom-element>
    #shadow
       <input disabled be-setting='is vegetarian from disabled, observed by $is vegan.'>
</my-custom-element>
```

This will both set the host's isVegetarian property to true, *and* create the link itemprop tag, the equivalent of:

```html
<my-custom-element>
    #shadow
       <input disabled be-setting='is vegetarian from disabled, observed by $ is vegan.'>
       <link itemprop=isVegan be-observant='of is vegetarian.'>
</my-custom-element>
```
