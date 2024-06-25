import { Container } from '../Container/Container';
import style from './Card.module.css';
import image from '../../assets/ellipse.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cardRequestAsync } from '../../store/cardStore/cardActionRequest';
import { getToken } from '../../localStorage/controlLocalStorage';

export const Card = () => {
  const dispatch = useDispatch();
  const infoCard = useAppSelector(state => state.memberCard.memberCard);
  const token = getToken();
  const navigate = useNavigate();
  const fullName = `${infoCard.first_name} ${infoCard.last_name}`;
  // }
  const id = useLocation().hash.substring(1);

  useEffect(() => {
    if (!token) {
      navigate('/auth');
    } else if (id) {
      dispatch(cardRequestAsync(id));
    }
  }, []);
  return (
    <>
      <section className={style.heroCard}>
        <Container>
          <div className={style.heroCardWrap}>
            <img src={infoCard.avatar} alt="" className={style.heroCardImg} />
            <div className={style.heroCardContent}>
              <h2 className={style.title}>{fullName}</h2>
              <p className={style.subtitle}>
                Партнер
              </p>
            </div>

          </div>
        </Container>
      </section>

      <Container>
        <section className={style.card}>
          <div className={style.cardContent}>
            <p>
              Клиенты видят в&nbsp;нем эксперта по&nbsp;вопросам разработки
              комплексных решений финансовых продуктов, включая такие аспекты,
              как организационная структура, процессы, аналитика
              и&nbsp;ИТ-компоненты. Он&nbsp;помогает клиентам лучше понимать
              структуру рисков их&nbsp;бизнеса, улучшать процессы за&nbsp;счет
              применения новейших технологий и&nbsp;увеличивать продажи,
              используя самые современные аналитические инструменты.
            </p>
            <p>
              В&nbsp;работе с&nbsp;клиентами недостаточно просто решить
              конкретную проблему или помочь справиться с&nbsp;трудностями.
              Не&nbsp;менее важно уделять внимание обмену знаниями: &laquo;
              Один из&nbsp;самых позитивных моментов&nbsp;&mdash; это осознание
              того, что ты&nbsp;помог клиенту перейти на&nbsp;совершенно новый
              уровень компетентности, уверенность в&nbsp;том, что после
              окончания проекта у&nbsp;клиента есть все необходимое, чтобы
              дальше развиваться самостоятельно&raquo;.
            </p>
            <p>
              Помимо разнообразных проектов для клиентов финансового сектора,
              Сорин ведет активную предпринимательскую деятельность.
              Он&nbsp;является совладельцем сети клиник эстетической медицины
              в&nbsp;Швейцарии, предлагающей инновационный подход
              к&nbsp;красоте, а&nbsp;также инвестором других бизнес-проектов.
            </p>
          </div>
          <div className={style.cardContacts}>
            <a
              href="tel:+7(954)333-44-55"
              className={`${style.icon} ${style.phone}`}
            >
              +7 (954) 333-44-55
            </a>
            <a
              href="mailto:sykfafkar@gmail.com"
              className={`${style.icon} ${style.mail}`}
            >
              {infoCard.email}
            </a>
          </div>
        </section>
      </Container>
    </>
  );
};
