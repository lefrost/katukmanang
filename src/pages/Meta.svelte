<script>
  import { Link } from "svelte-routing";
  import { root } from "../assets/js/paths.js";
</script>

<div class="container  col--  col-centre--  grow--  meta">
  <div class="meta-back">
    <Link to={root}>↞ balik kampung</Link>
  </div>
  <div class="meta-text">
    Mini app for hosting<br />some party events. 🎉<br /><br />
    Made by
    <a href="https://github.com/ollefrost" target="_blank"> Ryan Koroh</a><br />
    for New Years' 2022. 😎<br /><br />
    <b>KATUK MANANG</b> means<br />
    "click to win" in<br />
    broken Malay, or<br />
    something like that. ✌️
  </div>
</div>

<style lang="scss">
  @import "../assets/scss/all.scss";

  .meta {
    font-size: 25px;
  }

  .meta-back {
    font-size: 0.8em;
    @include clickable;
    margin-bottom: 2em;
  }

  .meta-text {
    > a {
      text-decoration: underline;
      @include clickable;
    }
  }

  @media (min-width: $bp-sm) {
    .meta {
      font-size: 50px;
    }
  }
</style>
