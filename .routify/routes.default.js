

export default {
  "meta": {},
  "id": "_default",
  "_regex": {},
  "_paramKeys": {},
  "module": false,
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_cfd_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "cfd",
      "file": {
        "path": "src/routes/cfd.svelte",
        "dir": "src/routes",
        "base": "cfd.svelte",
        "ext": ".svelte",
        "name": "cfd"
      },
      "asyncModule": () => import('./../src/routes/cfd.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_cocon_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "cocon",
      "file": {
        "path": "src/routes/cocon.svelte",
        "dir": "src/routes",
        "base": "cocon.svelte",
        "ext": ".svelte",
        "name": "cocon"
      },
      "asyncModule": () => import('./../src/routes/cocon.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('./../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_mecaVol_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "mecaVol",
      "file": {
        "path": "src/routes/mecaVol.svelte",
        "dir": "src/routes",
        "base": "mecaVol.svelte",
        "ext": ".svelte",
        "name": "mecaVol"
      },
      "asyncModule": () => import('./../src/routes/mecaVol.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_polaire_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "polaire",
      "file": {
        "path": "src/routes/polaire.svelte",
        "dir": "src/routes",
        "base": "polaire.svelte",
        "ext": ".svelte",
        "name": "polaire"
      },
      "asyncModule": () => import('./../src/routes/polaire.svelte'),
      "children": []
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true
      },
      "_regex": {},
      "_paramKeys": {},
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}

import '@roxi/routify/lib/buildtime/plugins/devHelper/runtime.js'