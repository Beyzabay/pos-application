import React from "react";
import { Modal,Button } from "antd";

const BillDetails = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal
        title="Fatura Oluştur"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
        width={800}
      >
        <section className="bg-black py-20">
          <div className="mx-auto bg-white py-5">
            <article>
              <div className="px-5">
                <div className="text-5xl mb-10 font-bold">Logo</div>
                <div className="flex flex-row gap-24">
                  <div>
                    <p className="font-bold">Fatura Detayı</p>
                    <p>Belirtilmemiş</p>
                    <p>Random Street</p>
                    <p>Ankara/Türkiye</p>
                  </div>
                  <div>
                    <p className="font-bold">Fatura</p>
                    <p>Random Company</p>
                    <p>Tesla Street</p>
                    <p>Frisco</p>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <p className="font-bold">Fatura Numarası</p>
                      <p>00052</p>
                    </div>
                    <div>
                      <p className="font-bold">Yayın Tarihi</p>
                      <p>2022-11-21</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <p className="font-bold">Şartlar</p>
                      <p>0</p>
                    </div>
                    <div>
                      <p className="font-bold">Belirtilen Tarih</p>
                      <p>0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative overflow-x-auto mt-6 mb-6">
                  <table class="w-full text-left rtl:text-right text-gray-500">
                    <thead class="uppercase">
                      <tr className="border-b-2 border-neutral-500">
                        <th scope="col" class="text-black px-6 py-3 font-thin">
                          Görsel
                        </th>
                        <th scope="col" class="text-black px-6 py-3 font-thin">
                          Başlık
                        </th>
                        <th scope="col" class="text-black px-6 py-3 font-thin">
                          Fiyat
                        </th>
                        <th scope="col" class="text-black px-6 py-3 font-thin">
                          Adet
                        </th>
                        <th scope="col" class="text-black px-6 py-3 font-thin">
                          Toplam
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b">
                        <th scope="row" class="px-6 py-4">
                          <img
                            src="https://www.gastronomidergisi.com/images/haber/doganay%20salgam6929.jpg"
                            className="w-14 h-14 rounded"
                          />
                        </th>
                        <td class="px-6 py-4">Şalgam</td>
                        <td class="px-6 py-4">5₺</td>
                        <td class="px-6 py-4">1 Adet</td>
                        <td class="px-6 py-4 text-end">5.00 ₺</td>
                      </tr>
                      <tr class="bg-white border-b">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          <img
                            src="https://ardenmarket.com.tr/media/catalog/product/cache/fe063a782bf9af32443dcf3a2c32a457/b/e/beypazari-soda-200ml.jpg"
                            className="w-14 h-14 rounded"
                          />
                        </th>
                        <td class="px-6 py-4">Soda</td>
                        <td class="px-6 py-4">4 ₺</td>
                        <td class="px-6 py-4">2 Adet</td>
                        <td class="px-6 py-4 text-end">8.00 ₺</td>
                      </tr>
                      <tr class="bg-white border-b">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          <img
                            src="https://cdn.yemek.com/mncrop/940/625/uploads/2016/05/adana-kebap-one-cikan.jpg"
                            className="w-14 h-14 rounded"
                          />
                        </th>
                        <td class="px-6 py-4">Adana Kebap</td>
                        <td class="px-6 py-4">40 ₺</td>
                        <td class="px-6 py-4">1 Adet</td>
                        <td class="px-6 py-4 text-end">40.00 ₺</td>
                      </tr>
                      <tr class="bg-white border-b">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          <img
                            src="https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/2-32.webp"
                            className="w-14 h-14 rounded"
                          />
                        </th>
                        <td class="px-6 py-4">Lahmacun</td>
                        <td class="px-6 py-4">12 ₺</td>
                        <td class="px-6 py-4">1 Adet</td>
                        <td class="px-6 py-4 text-end">12.00 ₺</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th
                          className="text-right font-thin pt-3 pb-3"
                          colSpan="4"
                          scope="row"
                        >
                          Ara Toplam
                        </th>
                        <th className="text-right font-medium" scope="row">
                          65.00 ₺
                        </th>
                      </tr>
                      <tr>
                        <th
                          className="text-right font-thin pb-3"
                          colSpan="4"
                          scope="row"
                        >
                          KDV
                        </th>
                        <th
                          className="text-right text-red-400 font-medium"
                          scope="row"
                        >
                          +12.00₺
                        </th>
                      </tr>
                      <tr className="border-b">
                        <th
                          className="text-right font-thin pb-3"
                          colSpan="4"
                          scope="row"
                        >
                          Ara Toplam
                        </th>
                        <th className="text-right font-medium" scope="row">
                          77.00 ₺
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="flex flex-row pt-6 px-2 text-neutral-500">
                    <p>
                    Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                    Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                    sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                    talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                    ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                    Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                    geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                    England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                    Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="flex justify-end mt-3">
          <Button type="primary" size="large">Yazdır</Button>
        </div>
      </Modal>
    </>
  );
};

export default BillDetails;
