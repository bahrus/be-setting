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
    <input disabled be-setting='of is Vegetarian from disabled'>
    </template>
</my-custom-element>
```

What this does:

Sets host's isVegetarian property to true, and then flies away into the sunset.