<script>
  import logoImg from "../assets/images/logo.png";
  import Icon from "./Icon.svelte";

  const leftNavItems = [
    { name: 'Главная страница', isActive: false },
    { name: 'Карта', isActive: true },
    { name: 'Высокоскоростной электропоезд', isActive: false },
    { name: 'Финансовая модель', isActive: false },
    { name: 'Архив', isActive: false }
  ];

  const rightNavItems = [
    { name: 'Объекты', withIcon: true },
    { name: 'Регионы', withIcon: true },
    { name: 'Этапы', withIcon: true },
    { name: 'Слои', withIcon: true }
  ];
</script>

<nav class="navbar">
  <div class="navbar__first-container">
    <ul class="navbar__list">
      {#each leftNavItems as item}
      <li class="raleway-normal navbar__item {item.isActive ? 'navbar__item--active' : ''}">
        {item.name}
      </li>
    {/each}
    </ul>
  </div>
  <div class="navbar__second-container">
    <Icon name="menu" className="navbar__menu" />
    <img src={logoImg} alt="Лого" class="navbar__logo" />
    <div class="raleway-bold navbar__title">
      Система управления проектной документацией проекта ВСМ-1
    </div>
    <ul class="navbar__list navbar__list--right">
      {#each rightNavItems as item}
      <li class="raleway-bold navbar__item">
        {item.name}
        {#if item.withIcon}
          <Icon name="triangle" className="navbar__triangle" />
        {/if}
      </li>
    {/each}
    </ul>
  </div>
  <button class="navbar__menu-mobile">
    <Icon name="menu-mobile" />
  </button>
  <button class="navbar__filter">
    <Icon name="filter" />
  </button>
</nav>

<style>
  .navbar {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.navbar__first-container {
  background-color: rgba(69, 71, 187, 0.25);
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
}

.navbar__list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
.navbar__item {
  padding: 2vh 0.5vw;
}
.navbar__first-container .navbar__item {
  position: relative;
}

.navbar__first-container .navbar__item::after {
  content: "";
  position: absolute;
  right: 0;
  top: 25%;
  bottom: 25%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.11);
}

.navbar__first-container .navbar__item--active::after {
  content: none;
}

.navbar__first-container .navbar__item:has(+ .navbar__item--active)::after {
  content: none;
}

.navbar__item--active {
  background-color: #ffffff;
  display: flex;
  align-items: center;
}
.navbar__item:not(.navbar__item--active):hover {
  background-color: rgba(69, 71, 187, 0.1);
}
.navbar__second-container {
  display: flex;
  align-items: center;
  padding-left: 1.5vw;
}

.navbar__list--right {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.navbar__logo {
  margin: 0 1%;
}

.navbar__menu-mobile,
.navbar__filter {
  position: absolute;
  top: 5rem;
  z-index: 1;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.19);
  cursor: pointer;
  display: none;
}
.navbar__menu-mobile {
  padding: 0.25rem 0.7rem;
  left: 1rem;
  border-radius: 8px;
}
.navbar__filter {
  padding: 0.3rem;
  right: 1rem;
  border-radius: 5px;
}

@media (max-width: 940px) {
  .navbar__second-container {
    display: none;
  }
  .navbar__menu-mobile {
    display: inline-block;
    background: #ffffff;
    border: none;
  }
  .navbar__filter {
    display: inline-block;
  }
}
 
</style>
