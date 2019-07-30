<template>
  <footer class="orange-footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4 col-md-2 footer-logo">
          <img src="../assets/img/logo-grey.png" alt="van solutions logo in grey">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 text-center pt-2">
          <p class="mb-1"><a href="tel:0113 3720014" class="footer-link">0113 372 0014</a></p>
          <p><a href="mailto:info@vansolutionsltd.co.uk" class="footer-link">info@vansolutionsltd.co.uk</a></p>
        </div>
      </div>
    </div>

    <!-- <cookie-law></cookie-law> -->

  </footer>
</template>

<script>
  // import CookieLaw from 'vue-cookie-law'
  // export default {
  //   components: { CookieLaw }
  // }
</script>

<style>

footer{
    color: white;
    padding-top: 15px;
}

.orange-footer {
    background-color: #ed6c1d;
}
.footer-link {
    color: white;
}
a.footer-link:hover{
    color: #383838;
}

/* cookie consent button */
.Cookie--bottom.Cookie--base {
  background: black;
  color: white;
}
.Cookie--bottom button.Cookie__button,
.Cookie--bottom button.Cookie__button:hover{
  background: #ed6c1d;
}

</style>
