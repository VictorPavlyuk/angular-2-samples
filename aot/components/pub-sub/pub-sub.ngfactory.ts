/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from './producer.ngfactory';
import * as import2 from '../../../components/pub-sub/producer';
import * as import3 from '../../../components/pub-sub/pub-sub-service';
import * as import4 from './consumer.ngfactory';
import * as import5 from '../../../components/pub-sub/consumer';
import * as import6 from '../../../components/pub-sub/pub-sub';
const styles_PubSub:any[] = ([] as any[]);
export const RenderType_PubSub:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_PubSub,
  data: {animation: ([] as any[])}
}
);
export function View_PubSub_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Pub Sub Using Observables']),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'producer',([] as any[]),(null as any),(null as any),(null as any),import1.View_Producer_0,import1.RenderType_Producer),
    import0.ɵdirectiveDef(1024,(null as any),0,import2.Producer,[import3.PubSubService],(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵelementDef(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'consumer',([] as any[]),(null as any),(null as any),(null as any),import4.View_Consumer_0,import4.RenderType_Consumer),
    import0.ɵdirectiveDef(1025,(null as any),0,import5.Consumer,[import3.PubSubService],(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),2,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
      import0.ɵelementDef(0,(null as any),(null as any),1,'a',[[
        'href',
        'http://www.syntaxsuccess.com/viewarticle/pub-sub-in-angular-2.0'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Read more here'])
  ]
  ,(check,view) => {
    var comp:import6.PubSub = view.component;
    check(view,10,0);
  },(null as any));
}
const RenderType_PubSub_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_PubSub_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),2,'pub-sub',([] as any[]),(null as any),(null as any),(null as any),View_PubSub_0,RenderType_PubSub),
    import0.ɵdirectiveDef(1024,(null as any),0,import6.PubSub,([] as any[]),(null as any),(null as any)),
    import0.ɵproviderDef(32768,(null as any),1,import3.PubSubService,import3.PubSubService,([] as any[]))
  ]
  ,(null as any),(null as any));
}
export const PubSubNgFactory:import0.ComponentFactory<import6.PubSub> = import0.ɵcreateComponentFactory('pub-sub',import6.PubSub,View_PubSub_Host_0);