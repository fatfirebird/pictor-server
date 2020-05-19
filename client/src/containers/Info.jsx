import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { hideModal } from '../actions/index.js'

const Layer = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: rgba(20, 20, 20, 0.9);
`

const InfoSection = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  width: 250px;

  text-align: center;
  background-color: #fff;

  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 350px
  }

  @media (min-width: 1024px) {
    width: 450px;
  }
`

const Info = () => {
  const dispatch = useDispatch();

  return(
    <Layer onClick={()=>{
      dispatch(hideModal('info'))
    }}>
      <InfoSection>
      Для загрузки изображения кликните на иконку в центре.
      <br></br>
      Вы можете загрузить изображение в формате jpeg/png размером не более 4мб.
      <br></br>
      После загрузки изображения раскроется меню фильтров. Сдвиньте полузнки для наложения эффекта.
      <br></br>
      Для обработки изображения серверу может понадобится время.
      <br></br>
      Чем больше фильтров, и чем выше их значения - тем больше времени потребуется.
      <br></br>
      Для использования дополнительных функций, кликните на кнопку "хлебные крошки" в правом верхнем углу.
      <br></br>
      В дополнительном меню доступно: сохранение изображения, выбор между меню фильтров и пресетов, отмена всех изменений.
      </InfoSection>
    </Layer>
  )
}

export default Info
