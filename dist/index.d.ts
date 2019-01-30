import _Vue, { Component, AsyncComponent } from 'vue'

declare module '@vue/web-component-wrapper' {
  export interface IWebComponentWrapOptions {
    useShadowDOM?: boolean;
  }

  export default function wrap(
    Vue: typeof _Vue,
    Component: Component | AsyncComponent,
    options?: IWebComponentWrapOptions
  ): new () => HTMLElement
}
