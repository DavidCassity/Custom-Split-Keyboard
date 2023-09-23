function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[242.0501467,-171.0214842],"radius":2.5})
.union(
    CAG.circle({"center":[225.4977132,-118.8746623],"radius":2.5})
).union(
    CAG.circle({"center":[169.9,-156.23],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[242.0501467,-171.0214842],"radius":1.5})
.union(
    CAG.circle({"center":[225.4977132,-118.8746623],"radius":1.5})
).union(
    CAG.circle({"center":[169.9,-156.23],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D([[163.5127379,-164.5],[152,-164.5]]).appendArc([148,-160.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([148,-145.5]).appendArc([152,-141.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([163.9420932,-141.5]).appendArc([167.9187131,-137.06815],{"radius":4,"clockwise":false,"large":false}).appendPoint([166.4180144,-123.2492163]).appendArc([169.83357,-118.8569109],{"radius":4,"clockwise":true,"large":false}).appendPoint([201.7208617,-114.3395446]).appendArc([202.2819261,-114.3],{"radius":4,"clockwise":true,"large":false}).appendPoint([225.7117166,-114.3]).appendArc([226.2853038,-114.3413389],{"radius":4,"clockwise":true,"large":false}).appendPoint([241.2039268,-116.502962]).appendArc([244.5986458,-120.9641623],{"radius":4,"clockwise":true,"large":false}).appendPoint([242.8684063,-134.6270156]).appendArc([246.7669029,-139.1289456],{"radius":4,"clockwise":false,"large":false}).appendPoint([285.2950696,-139.8014573]).appendArc([289.2102768,-144.1467393],{"radius":4,"clockwise":true,"large":false}).appendPoint([286.0462059,-180.6000429]).appendArc([285.8432634,-181.5564245],{"radius":4,"clockwise":true,"large":false}).appendPoint([279.8178204,-199.0555813]).appendArc([274.7334733,-201.5353829],{"radius":4,"clockwise":true,"large":false}).appendPoint([256.3100043,-195.1916737]).appendArc([255.3096131,-194.9851558],{"radius":4,"clockwise":false,"large":false}).appendPoint([242.5738485,-194.0212337]).appendArc([238.8854739,-189.7536155],{"radius":4,"clockwise":true,"large":false}).appendPoint([239.8672666,-175.7133266]).appendArc([235.3135112,-171.474191],{"radius":4,"clockwise":false,"large":false}).appendPoint([220.3467586,-173.6038675]).appendArc([219.8530537,-173.6431488],{"radius":4,"clockwise":true,"large":false}).appendPoint([208.2468374,-173.8456924]).appendArc([207.7555674,-173.884628],{"radius":4,"clockwise":false,"large":false}).appendPoint([190.2791383,-176.3604554]).appendArc([189.7180739,-176.4],{"radius":4,"clockwise":true,"large":false}).appendPoint([170.8872621,-176.4]).appendArc([166.9662118,-171.6092],{"radius":4,"clockwise":true,"large":false}).appendPoint([167.4337882,-169.2908]).appendArc([163.5127379,-164.5],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlboard_extrude_4_outline_fn(){
    return new CSG.Path2D([[163.5127379,-164.5],[152,-164.5]]).appendArc([148,-160.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([148,-145.5]).appendArc([152,-141.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([163.9420932,-141.5]).appendArc([167.9187131,-137.06815],{"radius":4,"clockwise":false,"large":false}).appendPoint([166.4180144,-123.2492163]).appendArc([169.83357,-118.8569109],{"radius":4,"clockwise":true,"large":false}).appendPoint([201.7208617,-114.3395446]).appendArc([202.2819261,-114.3],{"radius":4,"clockwise":true,"large":false}).appendPoint([225.7117166,-114.3]).appendArc([226.2853038,-114.3413389],{"radius":4,"clockwise":true,"large":false}).appendPoint([241.2039268,-116.502962]).appendArc([244.5986458,-120.9641623],{"radius":4,"clockwise":true,"large":false}).appendPoint([242.8684063,-134.6270156]).appendArc([246.7669029,-139.1289456],{"radius":4,"clockwise":false,"large":false}).appendPoint([285.2950696,-139.8014573]).appendArc([289.2102768,-144.1467393],{"radius":4,"clockwise":true,"large":false}).appendPoint([286.0462059,-180.6000429]).appendArc([285.8432634,-181.5564245],{"radius":4,"clockwise":true,"large":false}).appendPoint([279.8178204,-199.0555813]).appendArc([274.7334733,-201.5353829],{"radius":4,"clockwise":true,"large":false}).appendPoint([256.3100043,-195.1916737]).appendArc([255.3096131,-194.9851558],{"radius":4,"clockwise":false,"large":false}).appendPoint([242.5738485,-194.0212337]).appendArc([238.8854739,-189.7536155],{"radius":4,"clockwise":true,"large":false}).appendPoint([239.8672666,-175.7133266]).appendArc([235.3135112,-171.474191],{"radius":4,"clockwise":false,"large":false}).appendPoint([220.3467586,-173.6038675]).appendArc([219.8530537,-173.6431488],{"radius":4,"clockwise":true,"large":false}).appendPoint([208.2468374,-173.8456924]).appendArc([207.7555674,-173.884628],{"radius":4,"clockwise":false,"large":false}).appendPoint([190.2791383,-176.3604554]).appendArc([189.7180739,-176.4],{"radius":4,"clockwise":true,"large":false}).appendPoint([170.8872621,-176.4]).appendArc([166.9662118,-171.6092],{"radius":4,"clockwise":true,"large":false}).appendPoint([167.4337882,-169.2908]).appendArc([163.5127379,-164.5],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function board_extrude_4_outline_fn(){
    return new CSG.Path2D([[163.4001024,-163],[153.5,-163]]).appendArc([149.5,-159],{"radius":4,"clockwise":true,"large":false}).appendPoint([149.5,-147]).appendArc([153.5,-143],{"radius":4,"clockwise":true,"large":false}).appendPoint([163.3770572,-143]).appendArc([167.3769651,-139.0271488],{"radius":4,"clockwise":false,"large":false}).appendPoint([167.4765874,-124.3494539]).appendArc([170.9154309,-120.4161473],{"radius":4,"clockwise":true,"large":false}).appendPoint([203.2208617,-115.8395446]).appendArc([203.7819261,-115.8],{"radius":4,"clockwise":true,"large":false}).appendPoint([224.2140559,-115.8]).appendArc([224.7830367,-115.8406742],{"radius":4,"clockwise":true,"large":false}).appendPoint([240.0980904,-118.0415466]).appendArc([243.5288815,-122.0435972],{"radius":4,"clockwise":true,"large":false}).appendPoint([243.3721494,-136.7164189]).appendArc([247.3021116,-140.7585345],{"radius":4,"clockwise":false,"large":false}).appendPoint([280.7050742,-141.3415854]).appendArc([284.6348333,-145.3997174],{"radius":4,"clockwise":true,"large":false}).appendPoint([284.1063723,-181.3815102]).appendArc([283.8888779,-182.6250418],{"radius":4,"clockwise":true,"large":false}).appendPoint([278.8878948,-197.1489512]).appendArc([273.8035477,-199.6287528],{"radius":4,"clockwise":true,"large":false}).appendPoint([258.1689531,-194.24533]).appendArc([257.267542,-194.0475412],{"radius":4,"clockwise":false,"large":false}).appendPoint([244.0690411,-192.7181558]).appendArc([240.4796465,-188.4592667],{"radius":4,"clockwise":true,"large":false}).appendPoint([241.3081114,-176.6116665]).appendArc([237.3604732,-172.3328675],{"radius":4,"clockwise":false,"large":false}).appendPoint([221.6728089,-172.165714]).appendArc([221.5813357,-172.1657854],{"radius":4,"clockwise":false,"large":false}).appendPoint([206.757368,-172.3468563]).appendArc([206.2451588,-172.3861025],{"radius":4,"clockwise":false,"large":false}).appendPoint([188.7791383,-174.8604554]).appendArc([188.2180739,-174.9],{"radius":4,"clockwise":true,"large":false}).appendPoint([171.4498976,-174.9]).appendArc([167.4502153,-170.950416],{"radius":4,"clockwise":true,"large":false}).appendPoint([167.3997847,-166.949584]).appendArc([163.4001024,-163],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
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
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerwall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerwall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerwall_case_fn() {
                    

                // creating part 0 of case _outerwall
                let _outerwall__part_0 = xlboard_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _outerwall__part_0_bounds = _outerwall__part_0.getBounds();
                let _outerwall__part_0_x = _outerwall__part_0_bounds[0].x + (_outerwall__part_0_bounds[1].x - _outerwall__part_0_bounds[0].x) / 2
                let _outerwall__part_0_y = _outerwall__part_0_bounds[0].y + (_outerwall__part_0_bounds[1].y - _outerwall__part_0_bounds[0].y) / 2
                _outerwall__part_0 = translate([-_outerwall__part_0_x, -_outerwall__part_0_y, 0], _outerwall__part_0);
                _outerwall__part_0 = rotate([0,0,0], _outerwall__part_0);
                _outerwall__part_0 = translate([_outerwall__part_0_x, _outerwall__part_0_y, 0], _outerwall__part_0);

                _outerwall__part_0 = translate([0,0,0], _outerwall__part_0);
                let result = _outerwall__part_0;
                
            
                    return result;
                }
            
            

                function _innerwall_case_fn() {
                    

                // creating part 0 of case _innerwall
                let _innerwall__part_0 = board_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _innerwall__part_0_bounds = _innerwall__part_0.getBounds();
                let _innerwall__part_0_x = _innerwall__part_0_bounds[0].x + (_innerwall__part_0_bounds[1].x - _innerwall__part_0_bounds[0].x) / 2
                let _innerwall__part_0_y = _innerwall__part_0_bounds[0].y + (_innerwall__part_0_bounds[1].y - _innerwall__part_0_bounds[0].y) / 2
                _innerwall__part_0 = translate([-_innerwall__part_0_x, -_innerwall__part_0_y, 0], _innerwall__part_0);
                _innerwall__part_0 = rotate([0,0,0], _innerwall__part_0);
                _innerwall__part_0 = translate([_innerwall__part_0_x, _innerwall__part_0_y, 0], _innerwall__part_0);

                _innerwall__part_0 = translate([0,0,0], _innerwall__part_0);
                let result = _innerwall__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = xlbottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        