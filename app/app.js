/**
 * This is the main code for the application
 */

Ext.Loader.setConfig({
	enabled:true
});
Ext.application({
    name: 'App',

	requires:[
        'App.view.GridPanel',
        'App.view.mineView'
        ], 
	//stores:[],
	
    launch: function() {
     	Ext.create('Ext.Window',{
			width:520,
			height:520,
			maximizable:true,
			title:'Buscaminas',
			autoScroll:true,
			frame:false,
			layout:'fit',
			items:[{
				xtype:'mineView'
			}]
		}).show();
    }
});