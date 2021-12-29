<script>
  import { Link } from "svelte-routing";
  import { root } from "../assets/js/paths.js";
  import * as popup from "../assets/js/popup";

  let players = [``];
  let side_a = [];
  let side_b = [];
  let current_exchange_index = 0;

  function addPlayer() {
    players.push(``);
    players = players;
    side_a = [];
  }

  function removePlayer(index) {
    players.splice(index, 1);
    players = players;
    side_b = [];
  }

  function shuffleArray(array) {
    let new_array = array;
    for (var i = new_array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = new_array[i];
      new_array[i] = new_array[j];
      new_array[j] = temp;
    }

    return new_array;
  }

  function draftPlayers() {
    current_exchange_index = 0;
    side_a = Array(Math.round(players.length / 2)).fill(``);
    side_b = Array(Math.round(players.length / 2)).fill(``);

    let shuffled_players = shuffleArray(players);

    for (let i = 0; i < shuffled_players.length; i++) {
      let assigned_number = Math.floor(
        Math.random() * (side_a.length - 1 - 0 + 1) + 0
      );

      if (i % 2 === 0) {
        while (side_a[assigned_number] !== ``) {
          assigned_number = Math.floor(
            Math.random() * (side_a.length - 1 - 0 + 1) + 0
          );
        }

        side_a[assigned_number] = shuffled_players[i];
      } else {
        while (side_b[assigned_number] !== ``) {
          assigned_number = Math.floor(
            Math.random() * (side_b.length - 1 - 0 + 1) + 0
          );
        }

        side_b[assigned_number] = shuffled_players[i];
      }
    }
  }
</script>

<div class="container  col--  col-centre--  grow--  exchange-gift">
  <div class="exchange-gift-back">
    <Link to={root}>↞ balik kampung</Link>
  </div>

  <div class="container  exchange-gift-popup" id="popup">
    🎉
    <div class="container  col--  exchange-gift-popup__text">
      Exchange {current_exchange_index + 1} of {side_a.length}
      <span>
        <b>{side_a[current_exchange_index]}</b> &<br />
        <b>{side_b[current_exchange_index]}</b>
      </span>
    </div>
    <div
      class="exchange-gift-button"
      on:click={() => {
        if (current_exchange_index + 1 < side_a.length) {
          current_exchange_index++;
        } else {
          popup.toggle(`popup`);
          setTimeout(() => {
            current_exchange_index = 0;
          }, 400);
        }
      }}
    >
      >
    </div>
  </div>

  <div class="container  col--  col-centre--  exchange-gift-players">
    <div class="exchange-gift-players__title">🎁 <b>EXCHANGE GIFT</b></div>
    {#each players as player, i}
      <div class="container  exchange-gift-player">
        #{i + 1}
        <input
          type="textbox"
          placeholder="name"
          class="exchange-gift-player__textbox"
          bind:value={player}
        />
        {#if players.length > 1}
          <div class="exchange-gift-button" on:click={() => removePlayer(i)}>
            -
          </div>
        {/if}
      </div>
    {/each}
    <div class="exchange-gift-button" on:click={() => addPlayer()}>+</div>
  </div>

  <div
    class="exchange-gift-button  main--"
    on:click={() => {
      draftPlayers();
      popup.toggle(`popup`);
    }}
  >
    Sepa yg menang?
  </div>
</div>

<style lang="scss">
  @import "../assets/scss/all.scss";

  .exchange-gift {
    font-size: 25px;
  }

  .exchange-gift-back {
    font-size: 0.8em;
    @include clickable;
    margin-bottom: 2em;
  }

  .exchange-gift-players {
    // height: 300px;
    // overflow-y: scroll;
    // padding: 0.5em;
    padding-bottom: 5em;
  }

  .exchange-gift-players__title {
    padding-bottom: 0.7em;
  }

  .exchange-gift-player {
    padding-bottom: 0.4em;
  }

  .exchange-gift-player__textbox {
    background: none;
    border: 2px solid transparent;
    border-bottom: 2px solid $black;
    border-radius: 0.2em;
    padding: 0.3em;
    font-size: 0.8em;
    width: 9em;
    margin: 0 0.5em;
  }

  .exchange-gift-button {
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

  .exchange-gift-popup {
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

  .exchange-gift-popup__text {
    padding: 0 1em;

    > b {
      font-size: 1.2em;
    }
  }

  .exchange-gift-popup {
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

  .exchange-gift-popup__text {
    padding: 0 1em;

    > span {
      padding-top: 0.2em;
      font-size: 1.2em;
    }
  }

  @media (min-width: $bp-sm) {
    .exchange-gift {
      font-size: 50px;
    }
  }
</style>
