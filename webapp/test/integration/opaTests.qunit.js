sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/agriexpoproducts/agriexpoproducts/test/integration/FirstJourney',
		'com/agriexpoproducts/agriexpoproducts/test/integration/pages/ProductsList',
		'com/agriexpoproducts/agriexpoproducts/test/integration/pages/ProductsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/agriexpoproducts/agriexpoproducts') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
                }
            },
            opaJourney.run
        );
    }
);