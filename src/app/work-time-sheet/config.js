// In real applications, you should not transpile code in the browser.
// You can see how to create your own application with Angular and DevExtreme here:
// https://js.devexpress.com/Documentation/Guide/Angular_Components/Getting_Started/Create_a_DevExtreme_Application/
window.config = {
    transpiler: 'ts',
    typescriptOptions: {
      module: 'system',
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
    },
    meta: {
      'typescript': {
        'exports': 'ts',
      },
      'devextreme/localization.js': {
        'esModule': true,
      },
    },
    paths: {
      'npm:': 'https://unpkg.com/',
    },
    map: {
      'ts': 'npm:plugin-typescript@4.2.4/lib/plugin.js',
      'typescript': 'npm:typescript@4.2.4/lib/typescript.js',
      '@angular/core': 'npm:@angular/core@12.2.17',
      '@angular/platform-browser': 'npm:@angular/platform-browser@12.2.17',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@12.2.17',
      '@angular/forms': 'npm:@angular/forms@12.2.17',
      '@angular/common': 'npm:@angular/common@12.2.17',
      '@angular/compiler': 'npm:@angular/compiler@12.2.17',
      'tslib': 'npm:tslib@2.3.1/tslib.js',
      'rxjs': 'npm:rxjs@7.5.3/dist/bundles/rxjs.umd.js',
      'rxjs/operators': 'npm:rxjs@7.5.3/dist/cjs/operators/index.js',
      'rrule': 'npm:rrule@2.6.4/dist/es5/rrule.js',
      'luxon': 'npm:luxon@1.28.0/build/global/luxon.min.js',
      'es6-object-assign': 'npm:es6-object-assign@1.1.0',
      'devextreme': 'npm:devextreme@22.2.5/cjs',
      'devextreme/bundles/dx.all': 'npm:devextreme@22.2.5/bundles/dx.all.js',
      'jszip': 'npm:jszip@3.7.1/dist/jszip.min.js',
      'devextreme-quill': 'npm:devextreme-quill@1.5.20/dist/dx-quill.min.js',
      'devexpress-diagram': 'npm:devexpress-diagram@2.1.72',
      'devexpress-gantt': 'npm:devexpress-gantt@4.1.42',
      'devextreme-angular': 'npm:devextreme-angular@22.2.5',
      '@devextreme/runtime': 'npm:@devextreme/runtime@3.0.11',
      'inferno': 'npm:inferno@7.4.11/dist/inferno.min.js',
      'inferno-compat': 'npm:inferno-compat/dist/inferno-compat.min.js',
      'inferno-create-element': 'npm:inferno-create-element@7.4.11/dist/inferno-create-element.min.js',
      'inferno-dom': 'npm:inferno-dom/dist/inferno-dom.min.js',
      'inferno-hydrate': 'npm:inferno-hydrate@7.4.11/dist/inferno-hydrate.min.js',
      'inferno-clone-vnode': 'npm:inferno-clone-vnode/dist/inferno-clone-vnode.min.js',
      'inferno-create-class': 'npm:inferno-create-class/dist/inferno-create-class.min.js',
      'inferno-extras': 'npm:inferno-extras/dist/inferno-extras.min.js',
      // Prettier
      'prettier/standalone': 'npm:prettier@2.8.4/standalone.js',
      'prettier/parser-html': 'npm:prettier@2.8.4/parser-html.js',
    },
    packages: {
      'app': {
        main: './app.component.ts',
        defaultExtension: 'ts',
      },
      'devextreme': {
        defaultExtension: 'js',
      },
      'devextreme/events/utils': {
        main: 'index',
      },
      'devextreme/events': {
        main: 'index',
      },
      'es6-object-assign': {
        main: './index.js',
        defaultExtension: 'js',
      },
      'rxjs': {
        defaultExtension: 'js',
      },
      'rxjs/operators': {
        defaultExtension: 'js',
      },
    },
    packageConfigPaths: [
      'npm:@devextreme/*/package.json',
      'npm:@devextreme/runtime@3.0.11/inferno/package.json',
      'npm:@angular/*/package.json',
      'npm:@angular/common@12.2.17/*/package.json',
      'npm:rxjs@7.5.3/package.json',
      'npm:rxjs@7.5.3/operators/package.json',
      'npm:devextreme-angular@22.2.5/*/package.json',
      'npm:devextreme-angular@22.2.5/ui/*/package.json',
      'npm:devextreme-angular@22.2.5/package.json',
      'npm:devexpress-diagram@2.1.72/package.json',
      'npm:devexpress-gantt@4.1.42/package.json',
    ],
  };
  System.config(window.config);
  