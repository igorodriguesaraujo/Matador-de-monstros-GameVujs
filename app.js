new Vue({
  el: "#app",
  data: {
    player: 100,
    monster: 100,
    modal: false,
    active: false,
    disabled: true,
    disabledEspecial: true,
    message: ""
  },
  computed: {
    getResult() {
      if (this.player <= 0) {
        this.player = 0;
        this.modal = true;
        this.message = "Você perdeu! :(";
      } else if (this.monster <= 0) {
        this.monster = 0;
        this.modal = true;
        this.message = "Você venceu o monstro! ;)";
      }
    }
  },
  methods: {
    onReset() {
      this.getEnd();
      this.modal = false;
      this.player = 100;
      this.monster = 100;
    },
    getDamage(min, max) {
      let random = Math.random() * (max - min) + min;
      return random.toFixed(0);
    },
    getNotification(player, monster) {
      this.active = true;
      this.message = `
      Jogador realizou ataque com danos de ${player} | 
      Monstro realizou ataque com danos de ${monster}
      `;
      setTimeout(() => {
        this.active = false;
      }, 5000);
    },
    getSimpleAttack() {
      let playerDamage = this.getDamage(1, 3);
      let monsterDamage = this.getDamage(1, 5);

      this.getNotification(playerDamage, monsterDamage);
      this.monster -= playerDamage;
      this.player -= monsterDamage;
      this.getResult;
    },
    getEspecialAttack() {
      this.monster -= 25;
      this.disabledEspecial = false;
    },
    getHeal() {
      if (this.player < 60) {
        this.player += 25;
        this.disabled = false;
      }
    },
    getEnd() {
      this.modal = true;
      this.active = false;
      this.disabled = true;
      this.disabledEspecial = true;
      this.message = "Que pena você desistiu! Tente novamente!";
    }
  }
});
