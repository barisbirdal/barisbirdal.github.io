import React, { useEffect } from 'react';

const Kvkk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ padding: '6rem 1.5rem', maxWidth: '900px', margin: '0 auto', color: 'var(--color-navy)' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 700, lineHeight: 1.4 }}>
        HADİSATALIM BİZ ELEKTRONİK TİCARET VE PAZARLAMA HİZMETLERİ A.Ş. LETSSELLAPP KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN AYDINLATMA METNİ
      </h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.7, color: 'var(--color-gray)' }}>
        <p>Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (“KVKK”) 10. maddesi uyarınca, veri sorumlusu sıfatıyla Hadisatalım Biz Elektronik Ticaret ve Pazarlama Hizmetleri A.Ş. (“HADİSATALIM”) tarafından hazırlanmıştır.</p>
        
        <p>Bu metin; LetsSellApp mobil uygulaması ve ilişkili dijital platformları kullanan satış temsilcileri, çalışanlar ve kullanıcılar bakımından geçerlidir.</p>
        
        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>1. Veri Sorumlusu</h3>
        <p>Hadisatalım Biz Elektronik Ticaret ve Pazarlama Hizmetleri A.Ş.<br/>
        Adres: Emniyet Evler Mah. Eski Büyükdere Cad. Sapphire Sit. No:1/1 Kağıthane / İstanbul<br/>
        E-posta: destek@hadisatalim.biz<br/>
        Web: www.letssell.app</p>
        
        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>2. İşlenen Kişisel Veri Kategorileri</h3>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><strong>Kimlik Verileri:</strong> Ad, ikinci ad, soyad</li>
          <li><strong>İletişim Verileri:</strong> Şirket e-posta adresi, kişisel e-posta adresi, telefon numarası, şirket adı</li>
          <li><strong>Lokasyon Verileri:</strong> Ülke, bölge/eyalet, il, ilçe, semt, AVM/cadde, bina</li>
          <li><strong>İşlem Güvenliği Verileri:</strong> IP adresi, log kayıtları, kullanıcı adı ve şifre bilgileri, uygulama kullanım verileri</li>
          <li><strong>Görsel ve İşitsel Kayıtlar:</strong> Satış görüşmelerine ilişkin ses kayıtları, metinler ve transkriptler</li>
          <li><strong>Özlük Verileri:</strong> Satış performansı, yetkinlik, skor, analiz ve değerlendirme verileri</li>
          <li><strong>Mesleki Deneyim Verileri:</strong> Eğitim, koçluk ve mentorluk süreçlerine ilişkin kayıtlar, yetkinlik değerlendirme kayıtları</li>
        </ul>
        <p>LetsSellApp kapsamında özel nitelikli kişisel veriler işlenmemektedir.</p>
        
        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>3. Kişisel Verilerin İşlenme Amaçları</h3>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Kullanıcı hesabının oluşturulması ve yönetilmesi</li>
          <li>Satış görüşmelerinin analiz edilmesi</li>
          <li>Satış performansının ölçülmesi ve geliştirilmesi</li>
          <li>Eğitim, koçluk ve mentorluk faaliyetlerinin planlanması ve yürütülmesi</li>
          <li>Uygulama altyapısının geliştirilmesi, güvenliğin ve sistem sürekliliğinin sağlanması</li>
        </ul>
        
        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>4. Kişisel Verilerin Hukuki Sebepleri</h3>
        <p>Kişisel verileriniz KVKK’nın 5. maddesi uyarınca;</p>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Sözleşmenin kurulması ve ifası</li>
          <li>Veri sorumlusunun meşru menfaati</li>
          <li>Gerekli hallerde açık rızanız</li>
        </ul>
        <p>hukuki sebeplerine dayanılarak işlenmektedir.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>5. Kişisel Verilerin Aktarılması</h3>
        <p>Kişisel verileriniz;</p>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Bağlı bulunduğunuz işveren veya işveren adına yetkili kişilerle (yalnızca satış süreçlerinin geliştirilmesi amacıyla),</li>
          <li>Bilişim teknolojileri, yapay zekâ, veri analitiği, bulut bilişim ve danışmanlık hizmeti alınan yurt içi ve yurt dışındaki hizmet sağlayıcılarla,</li>
          <li>Hukuken yetkili kamu kurum ve kuruluşlarıyla</li>
        </ul>
        <p>KVKK’ya uygun şekilde paylaşılabilir.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>6. Kişisel Verilerin Saklama Süresi</h3>
        <p>Kişisel verileriniz, LetsSellApp kullanımınızın sona ermesinden itibaren azami 5 yıl süreyle saklanmakta; bu sürenin sona ermesi halinde KVKK ve ilgili mevzuata uygun olarak silinmekte, yok edilmekte veya anonim hale getirilmektedir.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>7. Çerezler</h3>
        <p>LetsSellApp web sitesi ve mobil uygulaması kapsamında çerezler kullanılmaktadır. Zorunlu çerezler dışındaki çerezler, kullanıcı tercihlerine bağlı olarak çalıştırılmakta olup detaylı bilgilere Çerez Politikası üzerinden ulaşılabilir.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>8. Veri Sahibi Hakları</h3>
        <p>KVKK’nın 11. maddesi uyarınca veri sahipleri;</p>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Kişisel verilerinin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşleme amacını ve amaca uygunluğunu öğrenme</li>
          <li>Aktarılan üçüncü kişileri bilme</li>
          <li>Düzeltme, silme veya yok etme talep etme</li>
          <li>Otomatik sistemlerle aleyhe sonuçlara itiraz etme</li>
          <li>Kanuna aykırı işleme nedeniyle zarar doğması halinde tazminat talep etme</li>
        </ul>
        <p>haklarına sahiptir.</p>
        <p>Talepler <strong>destek@hadisatalim.biz</strong> adresine iletilebilir.</p>
      </div>
    </div>
  );
};

export default Kvkk;
