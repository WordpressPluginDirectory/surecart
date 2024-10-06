!function(){"use strict";var e=window.wp.plugins,a=window.React,t=window.wp.data,r=window.wp.editPost,o=window.wp.editor,n=window.wp.blockEditor,_=window.wp.components,s=window.wp.i18n;(0,e.registerPlugin)("plugin-document-setting-panel-demo",{render:function(){var e=(0,t.useSelect)((function(e){var a=e("core/editor").getEditedPostAttribute("meta")||{},t=a._surecart_dashboard_logo_width,r=a._surecart_dashboard_show_logo,n=a._surecart_dashboard_navigation_orders,_=a._surecart_dashboard_navigation_subscriptions,s=a._surecart_dashboard_navigation_downloads,i=a._surecart_dashboard_navigation_account,d=a._surecart_dashboard_navigation_billing;return{template:e(o.store).getEditedPostAttribute("template"),_surecart_dashboard_logo_width:t,_surecart_dashboard_show_logo:r,_surecart_dashboard_navigation_orders:n,_surecart_dashboard_navigation_subscriptions:_,_surecart_dashboard_navigation_downloads:s,_surecart_dashboard_navigation_account:i,_surecart_dashboard_navigation_billing:d}})),i=e.template,d=e._surecart_dashboard_logo_width,l=e._surecart_dashboard_show_logo,c=e._surecart_dashboard_navigation_orders,u=e._surecart_dashboard_navigation_subscriptions,g=e._surecart_dashboard_navigation_downloads,h=e._surecart_dashboard_navigation_account,b=e._surecart_dashboard_navigation_billing,w=(0,_.__experimentalUseCustomUnits)({availableUnits:(0,n.useSetting)("spacing.units")||["%","px","em","rem","vw"]}),m=(0,t.useDispatch)(o.store).editPost;return"pages/template-surecart-dashboard.php"!==i?null:(0,a.createElement)(r.PluginDocumentSettingPanel,{name:"sc-dashboard-panel",title:(0,s.__)("Template Options","surecart"),className:"custom-panel",icon:(0,a.createElement)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.519 35.5C27.1944 35.5 35.0379 27.665 35.0379 18C35.0379 8.33502 27.1944 0.5 17.519 0.5C7.84351 0.5 0 8.33502 0 18C0 27.665 7.84351 35.5 17.519 35.5ZM17.5944 9.25C16.1877 9.25 14.241 10.0536 13.2463 11.0449L10.5448 13.7372H24.0104L28.5129 9.25H17.5944ZM21.7689 24.9551C20.7742 25.9464 18.8275 26.75 17.4208 26.75H6.50228L11.0048 22.2628H24.4704L21.7689 24.9551ZM26.1453 15.9808H8.29837L7.45535 16.8221C5.4592 18.617 6.05123 20.0192 8.84675 20.0192H26.742L27.5853 19.1779C29.562 17.3936 28.9408 15.9808 26.1453 15.9808Z",fill:"currentColor"}))},(0,a.createElement)(_.ToggleControl,{label:(0,s.__)("Show Logo","surecart"),checked:l,onChange:function(e){return m({meta:{_surecart_dashboard_show_logo:e}})}}),!!l&&(0,a.createElement)(_.__experimentalUnitControl,{label:(0,s.__)("Logo Width","surecart"),value:d,onChange:function(e){return m({meta:{_surecart_dashboard_logo_width:e}})},units:w}),(0,a.createElement)(_.PanelRow,null,(0,a.createElement)("div",null,(0,a.createElement)(_.BaseControl.VisualLabel,null,(0,s.__)("Navigation","surecart")),(0,a.createElement)(_.ToggleControl,{label:(0,s.__)("Orders","surecart"),checked:c,onChange:function(e){return m({meta:{_surecart_dashboard_navigation_orders:e}})}}),(0,a.createElement)(_.ToggleControl,{label:(0,s.__)("Plans","surecart"),checked:u,onChange:function(e){return m({meta:{_surecart_dashboard_navigation_subscriptions:e}})}}),(0,a.createElement)(_.ToggleControl,{label:(0,s.__)("Downloads","surecart"),checked:g,onChange:function(e){return m({meta:{_surecart_dashboard_navigation_downloads:e}})}}),(0,a.createElement)(_.ToggleControl,{label:(0,s.__)("WordPress Account","surecart"),checked:h,onChange:function(e){return m({meta:{_surecart_dashboard_navigation_account:e}})}}),(0,a.createElement)(_.ToggleControl,{label:(0,s.__)("Billing Details","surecart"),checked:b,onChange:function(e){return m({meta:{_surecart_dashboard_navigation_billing:e}})}}))))}})}();