<script>
  import { Link } from "svelte-routing";
  import { root } from "../assets/js/paths.js";
  import * as popup from "../assets/js/popup";

  let players = [{ name: ``, has_won: false }];
  let winning_number = 0;
  let everyone_has_won = false;

  function addPlayer() {
    players.push({ name: ``, has_won: false });
    players = players.map((p) => ({ ...p, has_won: false }));
    everyone_has_won = false;
  }

  function removePlayer(index) {
    players.splice(index, 1);
    players = players.map((p) => ({ ...p, has_won: false }));
    everyone_has_won = false;
  }

  function pickWinner() {
    if (!players.some((p) => p.has_won === false)) {
      everyone_has_won = true;
    } else {
      winning_number = Math.floor(
        Math.random() * (players.length - 1 - 0 + 1) + 0
      );

      while (players[winning_number].has_won) {
        winning_number = Math.floor(
          Math.random() * (players.length - 1 - 0 + 1) + 0
        );
      }

      players[winning_number].has_won = true;
    }
  }
</script>

<div class="container  col--  col-centre--  grow--  lucky-draw">
  <div class="container  lucky-draw-popup" id="popup">
    🎉
    <div class="container  col--  lucky-draw-popup__text">
      {#if !everyone_has_won && players[winning_number]}
        <b>{players[winning_number].name}</b>
        is the winner!
      {:else}
        Everyone has already won!
      {/if}
    </div>
    <div
      class="lucky-draw-button"
      on:click={() => {
        popup.toggle(`popup`);
      }}
    >
      X
    </div>
  </div>

  <div class="lucky-draw-back">
    <Link to={root}>↞ balik kampung</Link>
  </div>

  <div class="container  col--  col-centre--  lucky-draw-players">
    <div class="lucky-draw-players__title">🍀 <b>LUCKY DRAW</b></div>
    {#each players as player, i}
      <div
        class="container  lucky-draw-player  {player.has_won
          ? `has-won--`
          : ``}"
      >
        #{i + 1}
        <input
          type="textbox"
          placeholder="name"
          class="lucky-draw-player__textbox"
          bind:value={player.name}
        />
        {#if players.length > 1}
          <div class="lucky-draw-button" on:click={() => removePlayer(i)}>
            -
          </div>
        {/if}
      </div>
    {/each}
    <div class="lucky-draw-button" on:click={() => addPlayer()}>+</div>
  </div>

  <div
    class="lucky-draw-button  main--"
    on:click={() => {
      pickWinner();
      popup.toggle(`popup`);
    }}
  >
    Sepa yg menang?
  </div>
</div>

<style lang="scss">
  @import "../assets/scss/all.scss";

  .lucky-draw {
    font-size: 25px;
  }

  .lucky-draw-back {
    font-size: 0.8em;
    // position: absolute;
    // top: 0;
    @include clickable;
    margin-bottom: 2em;
  }

  .lucky-draw-players {
    // height: 300px;
    // overflow-y: scroll;
    // padding: 0.5em;
    padding-bottom: 5em;
  }

  .lucky-draw-players__title {
    padding-bottom: 0.7em;
  }

  .lucky-draw-player {
    padding-bottom: 0.4em;
    @include swish;

    &.has-won-- {
      opacity: 0.5;
    }
  }

  .lucky-draw-player__textbox {
    background: none;
    border: 2px solid transparent;
    border-bottom: 2px solid $black;
    border-radius: 0.2em;
    padding: 0.3em;
    font-size: 0.8em;
    width: 9em;
    margin: 0 0.5em;
  }

  .lucky-draw-button {
    padding: 0.1em 0.4em;
    border-radius: 0.4em;
    box-shadow: $box-shadow;
    background-color: $black;
    color: $white;
    @include clickable;

    &.main-- {
      font-size: 1.2em;
      padding: 0.4em 1em;
      position: fixed;
      bottom: 1.5em;
      box-shadow: $box-shadow-heavy;
    }
  }

  .lucky-draw-popup {
    font-size: 0.8em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: $orange;
    // color: $white;
    box-shadow: $box-shadow;
    border-radius: 0.5em;
    padding: 0.8em 1.2em;
    @include popup;
  }

  .lucky-draw-popup__text {
    padding: 0 1em;

    > b {
      font-size: 1.2em;
    }
  }

  @media (min-width: $bp-sm) {
    .lucky-draw {
      font-size: 50px;
    }
  }
</style>
