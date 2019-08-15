<template>
  <div>
    <!-- logo image -->
    <div class="logo">
      <!-- logo on small screens -->
      <img src="../assets/img/logo-full.png" alt="van solutions ltd logo" class="d-block d-md-none">
      <!-- logo on med+ screens -->
      <img src="../assets/img/logo-no-txt.png" alt="van solutions ltd logo" class="d-none d-md-block">
    </div>

    <!-- stripes -->
    <div class="stripes-container">
      <div class="stripes-stripes">
      </div>
      <div class="stripes-text">
        <h5>
          <span class="van-text">VAN </span>
          <span class="solutions-text">SOLUTIONS</span>
        </h5>
      </div>
      <div class="stripes-fill">
      </div>
    </div>

    <!-- page content -->
    <section class="container-fluid service-main-div">
      <div class="row pr-md-4 pl-md-4 contact-row">
        <div class="col-sm-12 col-md-5 col-lg-4 order-md-2 pt-4 pt-md-0 pl-2 pl-md-3">
          <div class="col-12">
            <h4 class="orange-text font-weight-bold">CONTACT US:</h4>
            <p class="mb-1"><a href="tel:0113 3720014" class="footer-link">0113 372 0014</a></p>
            <p><a href="mailto:info@vansolutionsltd.co.uk" class="footer-link">info@vansolutionsltd.co.uk</a></p>
          </div>

          <!-- only visible on med+ screens -->
          <div class="col-12 d-none d-md-block">
            <h4 class="orange-text font-weight-bold">WHERE TO FIND US:</h4>
            <p class="mb-1">Van Solutions Ltd</p>
            <p class="mb-1">Croxley House</p>
            <p class="mb-1">Olympia Industrial Estate</p>
            <p class="mb-1">Gelderd Lane</p>
            <p class="mb-1">Leeds, LS12 6AL</p>
          </div>
        </div>

        <!-- enquiry form -->
        <div class="col-12 col-lg-8 offset-lg-2 order-md-3 mt-1 mt-md-4 pt-5 lower-container" data-aos="fade-up">
          <!-- header only visible on med+ screens -->
          <h4 class="orange-text font-weight-bold pl-2">ENQUIRY FORM:</h4>

          <!-- contact form (uses formspree) -->
          <form method="POST" action="https://formspree.io/ed.walker@hotmail.co.uk">

            <div class="container">
              <div class="row">

                <div class="form-group col-12 col-md-4">
                  <label for="name">Name <span class="asterix small">(required)</span></label>
                  <input type="text" class="form-control" id="name" name="name" required/>
                </div>
            
                <div class="form-group col-12 col-md-8">
                  <label for="email">Email <span class="asterix small">(required)</span></label>
                  <input type="email" class="form-control" id="email" name="email" required />
                </div>

                <div class="form-group col-12 col-md-4">
                  <label for="company_name">Company Name <span class="asterix small">(required)</span></label>
                  <input type="text" class="form-control" id="company_name" name="company_name" required/>
                </div>

                <div class="form-group col-12 col-md-8">
                  <label for="phone">Contact Number</label>
                  <input type="text" class="form-control" id="phone" name="phone"/>
                </div>

                <div class="form-group col-12">
                  <label for="enquiry">Enquiry</label>
                  <textarea class="form-control" id="enquiry" name="enquiry"></textarea>
                </div>
                
                <div class="col-12">
                  <button type="submit" class="btn btn-grey">Submit</button>  
                </div>
                
                <div class="col-12 pt-2">
                  <p class="small">Van Solutions will only use your contact details to respond to your enquiry. Your information will not be shared with any third parties.</p>  
                </div>
                
              </div>
            </div>
          </form>
        </div>

        <!-- map -->
        <div class="col-sm-12 col-md-7 col-lg-5 offset-lg-2 order-md-1 pr-0 pl-0" >
          <!-- <div class="col-12" id="map"></div> -->
          <div class="col-12 pr-0 pl-0">
            <google-map></google-map>
          </div>
        </div>
        
        <!-- only visible on small screens -->
        <div class="col-12 d-block d-md-none pt-3 contact-address">
          <h4 class="orange-text font-weight-bold">WHERE TO FIND US:</h4>
          <p class="mb-1">Van Solutions Ltd</p>
          <p class="mb-1">Croxley House</p>
          <p class="mb-1">Olympia Industrial Estate</p>
          <p class="mb-1">Gelderd Lane</p>
          <p class="mb-4">Leeds, LS12 6AL</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

import googleMap from '../components/GoogleMap.vue'

export default {
  components: {
    'google-map': googleMap
    }
}

</script>


