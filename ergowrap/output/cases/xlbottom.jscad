function xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D([[163.5127379,-164.5],[152,-164.5]]).appendArc([148,-160.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([148,-145.5]).appendArc([152,-141.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([163.9420932,-141.5]).appendArc([167.9187131,-137.06815],{"radius":4,"clockwise":false,"large":false}).appendPoint([166.4180144,-123.2492163]).appendArc([169.83357,-118.8569109],{"radius":4,"clockwise":true,"large":false}).appendPoint([201.7208617,-114.3395446]).appendArc([202.2819261,-114.3],{"radius":4,"clockwise":true,"large":false}).appendPoint([225.7117166,-114.3]).appendArc([226.2853038,-114.3413389],{"radius":4,"clockwise":true,"large":false}).appendPoint([241.2039268,-116.502962]).appendArc([244.5986458,-120.9641623],{"radius":4,"clockwise":true,"large":false}).appendPoint([242.8684063,-134.6270156]).appendArc([246.7669029,-139.1289456],{"radius":4,"clockwise":false,"large":false}).appendPoint([285.2950696,-139.8014573]).appendArc([289.2102768,-144.1467393],{"radius":4,"clockwise":true,"large":false}).appendPoint([286.0462059,-180.6000429]).appendArc([285.8432634,-181.5564245],{"radius":4,"clockwise":true,"large":false}).appendPoint([279.8178204,-199.0555813]).appendArc([274.7334733,-201.5353829],{"radius":4,"clockwise":true,"large":false}).appendPoint([256.3100043,-195.1916737]).appendArc([255.3096131,-194.9851558],{"radius":4,"clockwise":false,"large":false}).appendPoint([242.5738485,-194.0212337]).appendArc([238.8854739,-189.7536155],{"radius":4,"clockwise":true,"large":false}).appendPoint([239.8672666,-175.7133266]).appendArc([235.3135112,-171.474191],{"radius":4,"clockwise":false,"large":false}).appendPoint([220.3467586,-173.6038675]).appendArc([219.8530537,-173.6431488],{"radius":4,"clockwise":true,"large":false}).appendPoint([208.2468374,-173.8456924]).appendArc([207.7555674,-173.884628],{"radius":4,"clockwise":false,"large":false}).appendPoint([190.2791383,-176.3604554]).appendArc([189.7180739,-176.4],{"radius":4,"clockwise":true,"large":false}).appendPoint([170.8872621,-176.4]).appendArc([166.9662118,-171.6092],{"radius":4,"clockwise":true,"large":false}).appendPoint([167.4337882,-169.2908]).appendArc([163.5127379,-164.5],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlbottom_case_fn() {
                    

                // creating part 0 of case xlbottom
                let xlbottom__part_0 = xlboard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlbottom__part_0_bounds = xlbottom__part_0.getBounds();
                let xlbottom__part_0_x = xlbottom__part_0_bounds[0].x + (xlbottom__part_0_bounds[1].x - xlbottom__part_0_bounds[0].x) / 2
                let xlbottom__part_0_y = xlbottom__part_0_bounds[0].y + (xlbottom__part_0_bounds[1].y - xlbottom__part_0_bounds[0].y) / 2
                xlbottom__part_0 = translate([-xlbottom__part_0_x, -xlbottom__part_0_y, 0], xlbottom__part_0);
                xlbottom__part_0 = rotate([0,0,0], xlbottom__part_0);
                xlbottom__part_0 = translate([xlbottom__part_0_x, xlbottom__part_0_y, 0], xlbottom__part_0);

                xlbottom__part_0 = translate([0,0,0], xlbottom__part_0);
                let result = xlbottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlbottom_case_fn();
            }

        