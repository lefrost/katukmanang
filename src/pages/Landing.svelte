<script>
  import { Link } from "svelte-routing";
  import { root } from "../assets/js/paths.js";
</script>

<div class="container  col--  col-centre--  col-middle--  grow--  landing">
  <div class="container  col--  col-centre--">
    <div class="landing-title">KATUK 😎 MANANG</div>
    <div class="landing-subtitle">sepa yg menang ni?</div>

    <div class="container  col--  col-centre--  stretch--  landing-buttons">
      <Link to="{root}exchange-gift">
        <div class="landing-buttons__button">🎁 EXCHANGE GIFT</div>
      </Link>
      <Link to="{root}lucky-draw">
        <div class="landing-buttons__button">🍀 LUCKY DRAW</div>
      </Link>
      <Link to="{root}meta">
        <div class="landing-buttons__link">apa ni?</div>
      </Link>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../assets/scss/all.scss";

  .landing {
    font-size: 25px;
  }

  .landing-title {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
  }

  .landing-subtitle {
    padding-top: 0.3em;
    font-size: 1em;
  }

  .landing-buttons {
    padding-top: 1em;

    > :global(a) {
      width: 10em;
      text-align: center;
    }

    > :global(a):not(:first-child) {
      margin-top: 0.5em;
    }
  }

  .landing-buttons__button {
    font-size: 0.9em;
    padding: 0.6em 1.2em;
    background-color: $black;
    color: $white;
    box-shadow: $box-shadow;
    border-radius: 0.5em;
    @include clickable;
  }

  .landing-buttons__link {
    font-size: 0.7em;
    text-decoration: underline;
    opacity: 0.5;
    @include clickable;
  }

  @media (min-width: $bp-sm) {
    .landing {
      font-size: 50px;
    }
  }
</style>
