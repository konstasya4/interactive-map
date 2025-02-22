<script>
  import logoImg from "../assets/images/logo.png";
  import Icon from "./Icon.svelte";
</script>

<nav class="navbar">
  <div class="navbar__first-container">
    <ul class="navbar__list">
      <li class="raleway-normal navbar__item">Главная страница</li>
      <li class="raleway-normal navbar__item navbar__item--active">Карта</li>
      <li class="raleway-normal navbar__item">Высокоскоростной электропоезд</li>
      <li class="raleway-normal navbar__item">Финансовая модель</li>
      <li class="raleway-normal navbar__item">Архив</li>
    </ul>
  </div>
  <div class="navbar__second-container">
    <Icon name="menu" class="navbar__menu" />
    <img src={logoImg} alt="Лого" class="navbar__logo" />
    <div class="raleway-bold navbar__title">
      Система управления проектной документацией проекта ВСМ-1
    </div>
    <ul class="navbar__list navbar__list--right">
      <li class="raleway-bold navbar__item">
        Объекты <Icon name="triangle" className="navbar__triangle"/>
      </li>
      <li class="raleway-bold navbar__item">
        Регионы <Icon name="triangle" />
      </li>
      <li class="raleway-bold navbar__item">
        Этапы <Icon name="triangle" class="navbar__triangle"/>
      </li>
      <li class="raleway-bold navbar__item">
        Слои <Icon name="triangle" class="navbar__triangle"/>
      </li>
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

/* Стили для первого контейнера навбара */
.navbar__first-container {
  background-color: rgba(69, 71, 187, 0.25);
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
}

/* Стили для списка и элементов первого контейнера */
.navbar__list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
.navbar__item {
  padding: 2vh 1vw;
}
.navbar__first-container .navbar__item {
  position: relative;
}
/* Разделительная линия у элементов первого контейнера */
.navbar__first-container .navbar__item::after {
  content: "";
  position: absolute;
  right: 0;
  top: 25%;
  bottom: 25%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.11);
}
/* У активного элемента разделитель скрываем */
.navbar__first-container .navbar__item--active::after {
  content: none;
}
/* Если следующий элемент активный – скрываем разделитель у предыдущего */
.navbar__first-container .navbar__item:has(+ .navbar__item--active)::after {
  content: none;
}
/* Стили для активного элемента */
.navbar__item--active {
  background-color: #ffffff;
  display: flex;
  align-items: center;
}

/* Стили для второго контейнера навбара */
.navbar__second-container {
  display: flex;
  align-items: center;
  padding-left: 1.5vw;
}

/* Левый и правый списки во втором контейнере */
.navbar__list--right {
  display: flex;
  align-items: center;
  margin-left: auto;
}

/* Логотип */
.navbar__logo {
  margin: 0 1%;
}

/* Стили для мобильных кнопок (изначально скрыты) */
.navbar__menu-mobile,
.navbar__filter {
  position: absolute;
  top: 1rem;
  z-index: 1;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.19);
  cursor: pointer;
  display: none;
}
.navbar__menu-mobile {
  padding: 0.25rem 0.7rem;
  top: 4rem;
  left: 1rem;
  border-radius: 8px;
}
.navbar__filter {
  padding: 0.3rem;
  top: 4rem;
  right: 1rem;
  border-radius: 5px;
}

/* Медиазапросы для мобильной версии */
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
