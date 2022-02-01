$( function() {
            $.widget( "custom.catcomplete", $.ui.autocomplete, {
              _create: function() {
                this._super();
                this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
              },
              _renderMenu: function( ul, items ) {
                var that = this,
                  currentCategory = "";
                $.each( items, function( index, item ) {
                  var li;
                  if ( item.type != currentCategory ) {
                    // ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                    currentCategory = item.type;
                  }
                  li = that._renderItemData( ul, item );
                  if ( item.type ) {
                    li.attr( "aria-label", item.type + " : " + item.name );
                  }
                });
              }
            });
            var data = [
                {name: " Native kidney biopsy + IF + EM- HPE with IHC/Special Stains if needed", type: "Lab" },
                {name: " Serum Amylase", type: "Lab" },
                {name: " Transplant kidney biopsy review (slides only)", type: "Lab"},
                {name: "  Rapid native kidney biopsy with full IF panel- HPE with IHC/Special Stains if needed", type: "Lab"},
                {name: "  Rapid Transplant kidney biopsy with C4d- HPE with IHC/Special Stains if needed", type: "Lab"},
                {name: "% MB (CKMB/CK Ratio)", type: "Lab"},
                {name: "(CA) CYFRA 21-1; LUNG CANCER MARKER", type: "Lab"},
                {name: "1 IHC Marker", type: "Lab"},
                {name: "1 Immunocytochemistry(ICC) Marker", type: "Lab"},
                {name: "17-Hydroxy Progesterone (17-OHP), Serum (MP)", type: "Lab"},
                ];
         
            $( "#search" ).catcomplete({
              delay: 0,
              source: data
            });
          } );