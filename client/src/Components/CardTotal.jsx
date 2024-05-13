import { Button } from 'antd'
import React from 'react'
import {ClearOutlined} from '@ant-design/icons';


function CardTotal() {
  return (
    <div>
      <div className='w-full border'>
      <h2 className='bg-blue-600 text-white py-4 flex justify-center md:-mt-[16px]'>Sepetteki Ürünler</h2>
      </div>
      <div className='cardDiv'>
        <div className='card-item'>cart item</div>
        <div className="results">
          <div className='subTotalDiv font-bold border'>
          <div className='flex justify-between m-1'>
          <div className="subTotal">Ara Toplam</div>
          <p>120 ₺</p>
          </div>
          <div className='flex justify-between m-1'>
          <div className='kdv text-red-500'>KDV %8</div>
          <div className='text-red-500'>+7,50</div>
          </div>
          </div>
          <div className="price font-bold border flex justify-between">
            <div className='m-1 text-green-600'>Genel Toplam</div>
            <div className='m-1'>127,50₺</div>
          </div>
          <div className='buttons flex flex-col'>
            <Button className='m-1 bg-blue-600 text-white'>Sipariş Oluştur</Button>
            <Button className='m-1 bg-red-600 text-white' icon={<ClearOutlined />}>Temizle</Button>
          </div>
        </div>
      </div>
      </div>

  )
}

export default CardTotal