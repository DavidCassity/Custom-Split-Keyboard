function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[163.4001024,-163],[153.5,-163]]).appendArc([149.5,-159],{"radius":4,"clockwise":true,"large":false}).appendPoint([149.5,-147]).appendArc([153.5,-143],{"radius":4,"clockwise":true,"large":false}).appendPoint([163.3770572,-143]).appendArc([167.3769651,-139.0271488],{"radius":4,"clockwise":false,"large":false}).appendPoint([167.4765874,-124.3494539]).appendArc([170.9154309,-120.4161473],{"radius":4,"clockwise":true,"large":false}).appendPoint([203.2208617,-115.8395446]).appendArc([203.7819261,-115.8],{"radius":4,"clockwise":true,"large":false}).appendPoint([224.2140559,-115.8]).appendArc([224.7830367,-115.8406742],{"radius":4,"clockwise":true,"large":false}).appendPoint([240.0980904,-118.0415466]).appendArc([243.5288815,-122.0435972],{"radius":4,"clockwise":true,"large":false}).appendPoint([243.3721494,-136.7164189]).appendArc([247.3021116,-140.7585345],{"radius":4,"clockwise":false,"large":false}).appendPoint([280.7050742,-141.3415854]).appendArc([284.6348333,-145.3997174],{"radius":4,"clockwise":true,"large":false}).appendPoint([284.1063723,-181.3815102]).appendArc([283.8888779,-182.6250418],{"radius":4,"clockwise":true,"large":false}).appendPoint([278.8878948,-197.1489512]).appendArc([273.8035477,-199.6287528],{"radius":4,"clockwise":true,"large":false}).appendPoint([258.1689531,-194.24533]).appendArc([257.267542,-194.0475412],{"radius":4,"clockwise":false,"large":false}).appendPoint([244.0690411,-192.7181558]).appendArc([240.4796465,-188.4592667],{"radius":4,"clockwise":true,"large":false}).appendPoint([241.3081114,-176.6116665]).appendArc([237.3604732,-172.3328675],{"radius":4,"clockwise":false,"large":false}).appendPoint([221.6728089,-172.165714]).appendArc([221.5813357,-172.1657854],{"radius":4,"clockwise":false,"large":false}).appendPoint([206.757368,-172.3468563]).appendArc([206.2451588,-172.3861025],{"radius":4,"clockwise":false,"large":false}).appendPoint([188.7791383,-174.8604554]).appendArc([188.2180739,-174.9],{"radius":4,"clockwise":true,"large":false}).appendPoint([171.4498976,-174.9]).appendArc([167.4502153,-170.950416],{"radius":4,"clockwise":true,"large":false}).appendPoint([167.3997847,-166.949584]).appendArc([163.4001024,-163],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        