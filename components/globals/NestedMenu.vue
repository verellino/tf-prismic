<template>
  <client-only>
    <div id="nested-menu">
      <vue-nested-menu :source="menu"></vue-nested-menu>
    </div>
  </client-only>
</template>

<script>
export default {
  name: "Nested-Menu",
  data() {
    return {
      menu: {
        title: "Inovating Indonesia",
        children: [
          {
            title: `Ekonomi`,
            children: [
              {
                title: `Investasi dan Keuangan`,
                link: `/category/Yqh9bREAACMAVsnW`,
              },
              {
                title: `Industri dan Perdagangan`,
                link: `/category/Yqh--xEAACAAVtDm`,
              },
            ],
          },
          {
            title: `Pemerintahan`,
            children: [
              {
                title: `Akses dan Infrastruktur`,
                link: `/category/Yqh_GhEAADoGVtF2`,
              },
              {
                title: `Keamanan dan Pertahanan`,
                link: `/category/Yqh_whEAACEAVtSA`,
              },
              {
                title: `Energi dan Lingkungan`,
                link: `/category/Yqh_2hEAACMAVtT_`,
              },
              {
                title: `Inisiatif dan Pembangunan`,
                link: `/category/Yqh_6BEAACAAVtVB`,
              },
              {
                title: `Kepentingan Publik`,
                link: `/category/Yqh_-REAACMAVtWR`,
              },
            ],
          },
          {
            title: `Teknologi`,
            children: [
              {
                title: `Artificial Intelligence`,
                link: `/category/YqiAMhEAADoGVtao`,
              },
              {
                title: `AR/VR`,
                link: `/category/YqiAPhEAACMAVtbp`,
              },
              {
                title: `Blockchain`,
                link: `/category/YqiASxEAACEAVtcn`,
              },
              {
                title: `Cloud computing`,
                link: `/category/YqiAjBEAACEAVthp`,
              },
              {
                title: `Data Analytics`,
                link: `/category/YqiAoREAACAAVtjF`,
              },
              {
                title: `Internet of Things`,
                link: `/category/YqiArhEAACAAVtkE`,
              },
              {
                title: `Metaverse`,
                link: `/category/YqiAuhEAADoGVtk-`,
              },
              {
                title: `Robotics`,
                link: ``,
              },
            ],
          },
          {
            title: `Wawasan`,
            children: [
              {
                title: `Laporan`,
                link: `/sector/government`,
              },
              {
                title: `Program`,
                link: `/sector/government`,
              },
              {
                title: `Glosarium`,
                link: `/sector/government`,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.Menu__header {
  display: flex;
  align-items: center;
  padding-left: 35px;
  height: 50px;
  color: #fff;
  font-size: 16px;
  background-color: #232f3e;
  cursor: pointer;
}

.Menu__header .arrow {
  padding-top: 2px;
  fill: #fff;
  margin-right: 10px;
  width: 10px;
  height: 100%;
  display: flex;
  align-items: center;
}

.Menu__list {
  list-style: none;
  padding-bottom: 2px;
}
.Menu__list .separator {
  border-bottom: 1px solid #d5dbdb;
  padding: 2px 0 0 0;
  margin: 0;
}

.Menu__item {
  color: #4a4a4a;
  padding-left: 35px;
  height: 45px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.Menu__item a {
  color: #4a4a4a;
  text-decoration: none;
}

.Menu__item .arrow {
  padding-top: 2px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  width: 10px;
  height: 100%;
}
</style>