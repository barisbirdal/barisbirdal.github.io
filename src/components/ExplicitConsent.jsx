import React, { useEffect } from 'react';

const ExplicitConsent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ padding: '6rem 1.5rem', maxWidth: '900px', margin: '0 auto', color: 'var(--color-navy)' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 700, lineHeight: 1.4 }}>
        HADİSATALIM BİZ ELEKTRONİK TİCARET VE PAZARLAMA HİZMETLERİ A.Ş. LETSSELLAPP AÇIK RIZA METNİ
      </h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.7, color: 'var(--color-gray)' }}>
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında; kimlik, iletişim, kullanıcı işlem bilgileri, satış görüşmelerine ilişkin ses, metin ve transkript verileri, satış performansı, yetkinlik, skor, değerlendirme ve analiz verileri, uygulama kullanım kayıtları ile geri bildirim, eğitim, koçluk ve mentorluk çıktılarından oluşan kişisel verilerimin;</p>
        
        <p>Hadisatalım Biz Elektronik Ticaret ve Pazarlama Hizmetleri A.Ş. (“HADİSATALIM”) tarafından geliştirilen ve işletilen LetsSellApp mobil uygulaması ve ilişkili dijital platformlar aracılığıyla;</p>
        
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Üyelik oluşturulması ve kullanıcı hesabımın yönetilmesi,</li>
          <li>Satış görüşmelerinin, işveren tarafından önceden belirlenmiş satış süreçleri ve senaryolar çerçevesinde analiz edilmesi,</li>
          <li>Satış yetkinliklerime ilişkin performans ölçüm, skor, rapor ve değerlendirmelerin oluşturulması,</li>
          <li>Eğitim, koçluk ve mentorluk süreçlerinin planlanması ve yürütülmesi,</li>
          <li>Satış görüşmesi çıktılarının geçmişe dönük olarak tarafımca ve ilgili kişilerce görüntülenebilmesi,</li>
          <li>Uygulamanın teknik altyapısının geliştirilmesi ve kullanıcı deneyiminin iyileştirilmesi,</li>
          <li>Yalnızca satış süreçlerinin geliştirilmesi amacıyla, bağlı bulunduğum işveren veya işveren adına yetkili kişilerle sınırlı şekilde paylaşılması,</li>
          <li>Bilgi teknolojileri, yapay zekâ, veri analitiği, bulut bilişim ve danışmanlık hizmetleri kapsamında yurt içi ve yurt dışındaki hizmet sağlayıcılarla paylaşılması</li>
        </ul>
        
        <p>amaçlarıyla işlenmesine ve aktarılmasına açık rıza verdiğimi kabul ve beyan ederim.</p>

        <p>Kişisel verilerim, ilgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre boyunca saklanacak; bu sürenin sona ermesi halinde silinecek, yok edilecek veya anonim hale getirilecektir.</p>

        <p>Kişisel verilerimin işlenmesi, KVKK’nın 5. maddesi uyarınca açık rızama, sözleşmenin kurulması ve ifası ile veri sorumlusunun meşru menfaatine dayanmaktadır.</p>

        <p>LetsSellApp web sitesi ve mobil uygulaması kapsamında çerezler (cookies) kullanılmaktadır. Zorunlu çerezler dışındaki çerezler, kullanıcıların açık tercihine bağlı olarak çalıştırılmakta olup, çerezlere ilişkin detaylı bilgilere Çerez Politikası üzerinden ulaşılabilir.</p>

        <p>Açık rızamı, LetsSellApp uygulaması üzerinden kullanıcı hesabım aracılığıyla veya <strong>destek@hadisatalim.biz</strong> adresine e-posta göndererek her zaman geri alabileceğimi bildiğimi kabul ederim.</p>
      </div>
    </div>
  );
};

export default ExplicitConsent;
