<?php
/*
  Template Name: Daily Assists
 */

$args = array(
    'post_type' => 'daily_assist',
    'orderby' => 'name',
    'order' => 'ASC',
    'hide_empty' => 1,
    'depth' => 1,
    'posts_per_page' => -1
);
// Query the posts

$daily_query = new WP_Query($args);

while ($daily_query->have_posts()) : $daily_query->the_post();
    // Hero Unit
    $unit_title = get_field('daily_assist_unit_title');
    $sub_title = get_field('daily_assist_sub_title');
    $daily_backg_image = get_field('daily_assist_choose_background_image');
    $daily_backg_video = get_field('daily_assist_background_video');
    // About Unit
    $daily_about_title = get_field('daily_assist_about_title');
    $daily_about_description = get_field('daily_assist_about_description');
    $daily_about_point1 = get_field('daily_assist_about_point_1');
    $daily_about_point2 = get_field('daily_assist_about_point_2');
    $daily_about_point3 = get_field('daily_assist_about_point_3');
    $daily_travel_accom = get_field('daily_assist_travel_accom_title');
    $daily_travel_accom_services = get_field('daily_assist_travel_accom_services');

    $daily_assist_admin_title = get_field('daily_assist_adminstrative_title');
    $daily_assist_admin_services = get_field('daily_assist_adminstrative_services');

    $daily_assist_food_cuisines_title = get_field('daily_assist_food_cuisines_title');
    $daily_assist_food_cuisines_services = get_field('daily_assist_food_cuisines_services');

    $daily_assist_shopping_title = get_field('daily_assist_shopping_title');
    $daily_assist_shopping_services = get_field('daily_assist_shopping_services');

endwhile;
//youtube background logic starts here
$imgPath = "";
if (!empty($daily_backg_image ['url'])) {
    $imgPath = $daily_backg_image ['url'];
} elseif ($imgPath == "" && !empty($daily_backg_video)) {
    $url = $daily_backg_video;

    $urls = parse_url($url);
    if ($urls['host'] == 'youtu.be') :

        $imgPath = ltrim($urls['path'], '/');


    elseif (strpos($urls['path'], 'embed') == 1) :

        $imgPath = end(explode('/', $urls['path']));

    //Expect the URL to be abcd only
    elseif (strpos($url, '/') === false):

        $imgPath = $url;

    //Expect the URL to be http://www.youtube.com/watch?v=abcd
    else :

        parse_str($urls['query']);

        $imgPath = $v;

    endif;
    if ($imgPath)
        $imgPath = "https://ytimg.googleusercontent.com/vi/" . $imgPath . "/maxresdefault.jpg";
}else {
    $imgPath = get_template_directory_uri() . "/assets/images/daily-assist-banner.jpg";
}
//youtube background logic ends here
?>

<?php include_once ('breadcrumbs-header.php');    // Include Custom header for Bread crumb. ?>
<!-- Bread crumb Container -->
<section class="breadcrumbCntr">
    <div class="container">
        <!-- NP Box -->
        <article class="npBox">
            <div class="container">
                <ul class="list-unstyled">
                    <li class="active"><a href="javascript:void(0)">Facilities & Services</a></li>
                    <li>Daily Assist</li>
                </ul>
            </div>
        </article>
        <!-- NP Box -->
    </div>
</section>
<!-- Bread crumb Container -->
<section class="sticky_nav2">
    <nav class="navbar pagescroll-menu" role="navigation" id="grid9" style="z-index:9999;">
        <div class="visible-xs tabMob-btn text-left">
            <a href="#selectmenu2" data-toggle="collapse" id="changedVVal2">About </a>
        </div>
        <div class="collapse navbar-collapse" id="selectmenu2">
            <ul class="nav navbar-nav" id="tabul2">
                <li class="active"><a href="#about_daily" class="page-scroll">About</a></li>
                <li><a href="#travel_stay" class="page-scroll">Travel & Stay</a></li>
                <li><a href="#nutri_cuisine" class="page-scroll">Nutrition & Cuisine</a></li>
                <li><a href="#shopping_errands" class="page-scroll">Shopping & Errands</a></li>
                <li><a href="#connec_assist" class="page-scroll">Connectivity & Assistance</a></li>
            </ul>
        </div>
    </nav>
</section>
<?php echo '</header>'; ?>
<!-- Header container -->
<?php echo '</div>'; ?>
<!-- Content Container -->
<section class="innercontentCntr daily_assistCntr">
   
        <div class="detailCntr cyberknifeCntr" style="background-image: url('<?php echo $imgPath; ?>');">
            <div class="arrBack visible-xs">
                <a href="javascript:void(0)">
                    <i class="icon icon-20 arrowWhiteBack"></i>
                </a>
            </div>
        </div>
        <div class="mainBanner-overlap custom_margin">
            <div class="container">

                <?php if (!empty($unit_title)): ?>
                    <div class="detail text-center mainbanner-detail">
                        <h1 class="title2 daily-assistTitle"> <?php echo $unit_title; ?> </h1>
                        <?php if (!empty($sub_title)): ?>
                            <h2 class="banner_h2"> <?php echo $sub_title; ?> </h2>
                        <?php endif; ?>
                        <?php if (!empty($daily_backg_video)): ?>
                            <div class="icon-holder">
                                <a class="various fancybox.iframe" href="<?php echo $daily_backg_video; ?>"><i class="icon icon-95 play-btn"></i></a>
                            </div>
                        <?php endif; ?>    
                    </div>
                <?php endif; ?>

                <nav class="navbar pagescroll-menu" role="navigation" id="grid8" style="position: relative;z-index:1400;">
                    <div class="visible-xs tabMob-btn text-left">
                        <a href="#selectmenu" data-toggle="collapse" id="changedVVal">About </a>
                    </div>
                    <div class="collapse navbar-collapse pd-t30" id="selectmenu">
                        <ul class="nav navbar-nav" id="tabul">
                            <li class="active"><a href="#about_daily" class="page-scroll">About</a></li>
                            <li><a href="#travel_stay" class="page-scroll">Travel & Stay</a></li>
                            <li><a href="#nutri_cuisine" class="page-scroll">Nutrition & Cuisine</a></li>
                            <li><a href="#shopping_errands" class="page-scroll">Shopping & Errands</a></li>
                            <li><a href="#connec_assist" class="page-scroll">Connectivity & Assistance</a></li>
                        </ul>
                    </div>
                </nav>

                <?php if (!empty($daily_about_title)): ?>
                    <div class="question_CTA daily mg-t20 clearfix" id="about_daily">
                        <div class="uppper_intro mg-b30">
                            <h2 class="pd-b20 concierge text-center"> <?php echo $daily_about_title; ?> </h2>
                            <?php if (!empty($daily_about_description)): ?>
                                <p> <?php echo $daily_about_description; ?> </p>
                            <?php endif; ?>
                        </div>

                        <div class="below_button_div text-center pd-t15">
                            <?php if (!empty($daily_about_point1)): ?>
                                <div class="col-sm-4 CTA-div">
                                    <i class="icon icon-45 phone_chat"></i>
                                    <div class="pd-t10">
                                        <p> <?php echo $daily_about_point1; ?> </p>
                                    </div>
                                </div>
                            <?php endif; ?>
                            <?php if (!empty($daily_about_point3)): ?>
                                <div class="col-sm-4 CTA-div">
                                    <i class="icon icon-45 phone_hash"></i>
                                    <div class="pd-t10">
                                        <p> <?php echo $daily_about_point2; ?> </p>
                                    </div>
                                </div>
                            <?php endif; ?>
                            <?php if (!empty($daily_about_point3)): ?>
                                <div class="col-sm-4 CTA-div">
                                    <i class="icon icon-45 message"></i>
                                    <div class="pd-t10">
                                        <p> <?php echo $daily_about_point3; ?> </p>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endif; ?>

                <?php if (!empty($daily_travel_accom)): ?>
                    <div class="accommodatoin_travel gray-bg" id="travel_stay">
                        <div>
                            <div class="icon-holder text-center mg-x-t30">
                                <i class="icon icon-80 accommodation"></i>
                            </div>
                            <div>

                                <?php if (!empty($daily_travel_accom)): ?>
                                    <h2 class="text-center mg-t20">
                                        <?php echo $daily_travel_accom; ?>
                                    </h2>
                                <?php endif; ?>
                                <?php
                                foreach ($daily_travel_accom_services as $daily_travel_accom_service):
                                    if (!empty($daily_travel_accom_service['daily_assist_travel_accom_Service_title'])):
                                        // daily_assist_travel_accom_service_point_1_title
                                        // daily_assist_travel_accom_service_point_1_description
                                        ?>
                                        <h4 class="text-center"> <?php echo $daily_travel_accom_service['daily_assist_travel_accom_Service_title']; ?> </h4>
                                        <?php if (!empty($daily_travel_accom_service['daily_assist_travel_accom_Service_description'])): ?>
                                            <p> <?php echo $daily_travel_accom_service['daily_assist_travel_accom_Service_description']; ?> </p>
                                        <?php endif; ?>
                                        <div class="button_wrapper mg-t30 clearfix pd-b50"></div>
                                        <?php
                                    endif;
                                endforeach;
                                ?>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                <?php endif; ?>

                <?php if (!empty($daily_assist_food_cuisines_title)): ?>
                    <div class="variety_food accommodatoin_travel white-bg" id="nutri_cuisine">
                        <div>
                            <div class="icon-holder text-center mg-x-t30">
                                <i class="icon icon-80 food_variety"></i>
                            </div>
                            <div>
                                <h2 class="text-center mg-t20"> 
                                    <?php echo $daily_assist_food_cuisines_title; ?>
                                </h2>
                                <?php
                                foreach ($daily_assist_food_cuisines_services as $daily_assist_food_cuisines_service):
                                    if (!empty($daily_assist_food_cuisines_service['daily_assist_travel_accom_Service_title'])):
                                        // daily_assist_travel_accom_service_point_1_title
                                        // daily_assist_travel_accom_service_point_1_description
                                        ?>
                                        <h4 class="text-center"> <?php echo $daily_assist_food_cuisines_service['daily_assist_travel_accom_Service_title']; ?> </h4>
                                        <?php if (!empty($daily_assist_food_cuisines_service['daily_assist_travel_accom_Service_description'])): ?>
                                            <p> <?php echo $daily_assist_food_cuisines_service['daily_assist_travel_accom_Service_description']; ?> </p>
                                        <?php endif; ?>
                                        <div class="button_wrapper mg-t30 clearfix pd-b50"></div>
                                        <?php
                                    endif;
                                endforeach;
                                ?>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>

                <?php if (!empty($daily_assist_shopping_title)): ?>
                
                   <?php
                               // echo '<pre>';
                //print_r($daily_assist_shopping_services);
                ?>
                    <div class="accommodatoin_travel gray-bg" id="shopping_errands">
                        <div>
                            <div class="icon-holder text-center mg-x-t30">
                                <i class="icon icon-80 shopping"></i>
                            </div>
                        </div>

                        <div>

                            <h2 class="text-center mg-t20"> <?php echo $daily_assist_shopping_title; ?> </h2>

                            <?php
                            foreach ($daily_assist_shopping_services as $daily_assist_shopping_service):
                                if (!empty($daily_assist_shopping_service['daily_assist_shopping_Service_title'])):
                                    // daily_assist_travel_accom_service_point_1_title
                                    // daily_assist_travel_accom_service_point_1_description
                                    ?>
                                    <h4 class="text-center"> <?php echo $daily_assist_shopping_service['daily_assist_shopping_Service_title']; ?> </h4>
                                    <?php if (!empty($daily_assist_shopping_service['daily_assist_shopping_Service_description'])): ?>
                                        <p> <?php echo $daily_assist_shopping_service['daily_assist_shopping_Service_description']; ?> </p>
                                    <?php endif; ?>
                                   <!--  <div class="button_wrapper mg-t30 clearfix pd-b50"></div> -->
                                    <!--points-->
                                    <div class="button_wrapper carePrograms mg-t40 clearfix pd-b50 text-center">
                                        <ul class="programs assist-programs">
                                            <?php if(!empty($daily_assist_shopping_service['daily_assist_shopping_service_point_1_title'])){?>
                                               <?php if($daily_assist_shopping_service['daily_assist_shopping_service_point_1_description']){ ?>
                                                    <li class="pd-lr-70">
                                                        <a style="text-decoration:none" href="" class="text-center">
                                                         <span  class="program-type arrowList max-width width-180 underline"><?php echo $daily_assist_shopping_service['daily_assist_shopping_service_point_1_title']; ?></span>
                                                        </a>
                                                    </li>
                                               <?php } else{ ?>
                                                    <li class="pd-lr-70">
                                                        <a href="" class="text-center" style="pointer-events:none;">
                                                         <span style="text-decoration:none" class="program-type arrowList max-width width-180"><?php echo $daily_assist_shopping_service['daily_assist_shopping_service_point_1_title']; ?></span>
                                                        </a>
                                                    </li>
                                               <?php } ?>
                                            <?php } ?>
                                            <?php if(!empty($daily_assist_shopping_service['daily_assist_shopping_service_point_2_title'])){?>
                                                <?php if($daily_assist_shopping_service['daily_assist_shopping_service_point_2_description']){ ?>
                                                    <li class="pd-lr-70">
                                              
                                                    <a href="" class="text-center">
                                                       <span class="program-type arrowList max-width width-180 underline"><?php echo $daily_assist_shopping_service['daily_assist_shopping_service_point_2_title']; ?></span>
                                                    </a>
                                                </li>
                                                 <?php } else{ ?>
                                                    <li class="pd-lr-70">
                                                        <a style="text-decoration:none" href="" class="text-center" style="pointer-events:none;">
                                                         <span style="text-decoration:none" class="program-type arrowList max-width width-180"><?php echo $daily_assist_shopping_service['daily_assist_shopping_service_point_2_title']; ?></span>
                                                        </a>
                                                    </li>
                                               <?php } ?>
                                            <?php } ?>
                                            <?php if(!empty($daily_assist_shopping_service['daily_assist_shopping_service_point_3_title'])){?>
                                                <?php if($daily_assist_shopping_service['daily_assist_shopping_service_point_3_description']){ ?>
                                                    <li class="pd-lr-70">
                                               
                                                    <a href="" class="text-center">
                                                       <span  class="program-type arrowList max-width width-180 underline"><?php echo $daily_assist_shopping_service['daily_assist_shopping_service_point_3_title']; ?></span>
                                                    </a>
                                                </li>
                                                 <?php } else{ ?>
                                                    <li class="pd-lr-70">
                                                        <a style="text-decoration:none" href="" class="text-center" style="pointer-events:none;">
                                                         <span style="text-decoration:none" class="program-type arrowList max-width width-180"><?php echo $daily_assist_shopping_service['daily_assist_shopping_service_point_3_title']; ?></span>
                                                        </a>
                                                    </li>
                                               <?php } ?>
                                            <?php } ?>
                                            <?php if(!empty($daily_assist_shopping_service['daily_assist_shopping_service_point_4_title'])){?>
                                                <?php if($daily_assist_shopping_service['daily_assist_shopping_service_point_4_description']){ ?>
                                                    <li class="pd-lr-70">
                                               
                                                    <a href="" class="text-center">
                                                       <span  class="program-type arrowList max-width width-180 underline"><?php echo $daily_assist_shopping_service['daily_assist_shopping_service_point_4_title']; ?></span>
                                                    </a>
                                                </li>
                                                 <?php } else{ ?>
                                                    <li class="pd-lr-70">
                                                        <a style="text-decoration:none" href="" class="text-center" style="pointer-events:none;">
                                                         <span style="text-decoration:none" class="program-type arrowList max-width width-180"><?php echo $daily_assist_shopping_service['daily_assist_shopping_service_point_4_title']; ?></span>
                                                        </a>
                                                    </li>
                                               <?php } ?>
                                            <?php } ?>
                                            <?php if(!empty($daily_assist_shopping_service['daily_assist_shopping_service_point_5_title'])){?>
                                                <?php if($daily_assist_shopping_service['daily_assist_shopping_service_point_5_description']){ ?>
                                                    <li class="pd-lr-70">
                                               
                                                    <a href="" class="text-center">
                                                       <span class="program-type arrowList max-width width-180 underline"><?php echo $daily_assist_shopping_service['daily_assist_shopping_service_point_5_title']; ?></span>
                                                    </a>
                                                </li>
                                                 <?php } else{ ?>
                                                    <li class="pd-lr-70">
                                                        <a style="text-decoration:none" href="" class="text-center" style="pointer-events:none;">
                                                         <span style="text-decoration:none" class="program-type arrowList max-width width-180"><?php echo $daily_assist_shopping_service['daily_assist_shopping_service_point_5_title']; ?></span>
                                                        </a>
                                                    </li>
                                               <?php } ?>
                                            <?php } ?>
                                        </ul>
                                        <!--points description-->
                                        <!--points description--->
                                    </div>
                                    <!--points-->
                                    <?php
                                endif;
                            endforeach;
                            ?>
                        </div>
                        

                        
                    </div>
                <?php endif; ?>


                <div class="accommodatoin_travel white-bg" id="connec_assist">
                    <div>
                        <div class="icon-holder text-center mg-x-t30">
                            <i class="icon icon-80 assistance"></i>
                        </div>
                        <div class="pd-b20">
                            <?php if (!empty($daily_assist_admin_title)): ?>
                                <h2 class="text-center mg-t20"> <?php echo $daily_assist_admin_title; ?> </h2>
                            <?php endif; ?>

                            <h4 class="text-center">
                                Internet services
                            </h4>
                            <p class="mg-b10">
                                We offer a host of internet solutions while you stay with us at Medanta. Apart from the basic WiFi connectivity our patients enjoy additional services that are not available at all other hospitals
                            </p>                        
                        </div>
                        <div class="listed_services internet_service">
                            <div class="diagnoseBox">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <ul class="row list-style1 specialized-clinics clinic-helpdesk">
                                            <li class="col-sm-3">
                                                <a href="" data-toggle="tab"><span class="cls_arrow">Free WiFi</span></a>
                                            </li>
                                            <li class="col-sm-3">
                                                <a href="" data-toggle="tab"><span class="cls_arrow">Video conferencing</span></a>
                                            </li>
                                            <li class="col-sm-3">
                                                <a href="" data-toggle="tab"><span class="cls_arrow">VOIP calls</span></a>
                                            </li>
                                            <li class="col-sm-3">
                                                <a href="" data-toggle="tab"><span class="cls_arrow">Bulk downloads & uploads</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="admin_assistance white-bg clearfix">
                    <h4 class="text-center pd-b30">
                        Administrative assistance
                    </h4>
                    <div class="col-sm-12">
                        <div class="col-sm-6 list-div">
                            <ul class="list-style3">
                                <li>
                                    File Taxes
                                </li>
                                <li>
                                    Generate secure stamp papers
                                </li>
                                <li>
                                    Documentation for government-issued documents such as Passport, PAN Card, and Driving License etc.
                                </li>
                                <li>
                                    Deposits, withdrawals and other banking services
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-6 list-div">
                            <ul class="list-style3">
                                <li>
                                    Pay phone bills, utility bills, domestic consumables bills, credit card bills or Recharge prepaid phones.
                                </li>
                                <li>
                                    Support services to help you maintain your documents even when you are on your medical visit</li>
                                <li>
                                    Have your scans, reports and other documents printed or photocopied
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="contact-info faq clearfix have_query">
                    <ul class="info">
                        <li>
                            <h5>Have a query?</h5>
                            <h4>Call us 1800 - 354 - 4556</h4>
                        </li>
                        <li>
                            <h5>Know more about our service</h5>
                            <h4><a href="">FAQ</a></h4>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <!-- Detail Container -->
</section>
<!-- Content Container -->
<?php echo '</section>'; ?>
<!-- Wrapper -->

<?php
get_footer();
