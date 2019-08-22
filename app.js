new Vue({
  el: "#app",
  data: {
    player: 100,
    monster: 100,
    playerDamage: 0,
    monsterDamage: 0,
    notification: ""
  },
  methods: {
    // Sistema randomico de danos e tratamento do valor(sem casas decimais)
    getDamage(min, max) {
      let damage = Math.random() * (max - min) + min;
      return damage.toFixed(0);
    },

    // Metodo de ataque
    getSimpleAttack() {
      this.playerDamage = this.getDamage(1, 3);
      this.monsterDamage = this.getDamage(4, 5);
      this.player -= this.monsterDamage;
      this.monster -= this.playerDamage;

      // Notificando o usuario sobre o valor dos danos sofridos
      this.getNotification(this.playerDamage, this.monsterDamage);
    },

    getAttackEspecial() {
      console.log("Ataque especial");
    },

    getHeal() {
      console.log("Curar");
    },

    getEnd() {
      console.log("Desitir");
    },

    getNotification(player, monster) {
      this.notification = `Jogador realizou dano de ${player} | Monstro realizou dano de ${monster}`;
      setTimeout(() => {
        this.notification = false;
      }, 5000);
    }
  }
});
