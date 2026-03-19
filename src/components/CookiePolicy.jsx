import React, { useEffect } from 'react';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ padding: '6rem 1.5rem', maxWidth: '900px', margin: '0 auto', color: 'var(--color-navy)' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 700, lineHeight: 1.4 }}>
        HADİSATALIM BİZ ELEKTRONİK TİCARET VE PAZARLAMA HİZMETLERİ ANONİM ŞİRKETİ LETSSELLAPP ÇEREZ POLİTİKASI
      </h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.7, color: 'var(--color-gray)' }}>
        <p>Bu Detaylı Çerez Politikası (Politika), Hadisatalım Biz Elektronik Ticaret ve Pazarlama Hizmetleri A.Ş. (Hadisatalım) tarafından geliştirilen ve işletilen LetsSellApp web sitesi ve mobil uygulaması (Platform) kapsamında kullanılan çerezler ve benzeri teknolojilere ilişkin esasları açıklamak amacıyla hazırlanmıştır.</p>
        
        <p>Bu Politika; 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), Avrupa Birliği Genel Veri Koruma Tüzüğü (“GDPR”) ve uygulanabilir ABD eyalet gizlilik mevzuatı ile uyumludur.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>1. Çerez Nedir?</h3>
        <p>Çerezler (cookies), bir web sitesi veya mobil uygulama tarafından cihazınıza yerleştirilen ve tarayıcı ya da uygulama tarafından saklanan küçük metin dosyalarıdır. Çerezler, Platform’un çalışması, güvenliğin sağlanması ve kullanıcı deneyiminin iyileştirilmesi amacıyla kullanılmaktadır.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>2. Benzeri Teknolojiler</h3>
        <p>Mobil uygulamalarda çerezlere ek olarak SDK’lar, piksel etiketleri, cihaz tanımlayıcıları ve uygulama içi analiz araçları kullanılabilir. Bu teknolojiler işlevsel olarak çerezlere benzer şekilde çalışır.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>3. Kullanılan Çerez Türleri</h3>
        <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', fontWeight: 600 }}>a) Zorunlu (Kesinlikle Gerekli) Çerezler</h4>
        <p>Bu çerezler Platform’un çalışması için zorunludur. Kimlik doğrulama, oturum yönetimi, güvenlik ve ağ yönetimi gibi temel fonksiyonları sağlar. Bu çerezler için açık rıza aranmaz.</p>
        
        <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', fontWeight: 600 }}>b) İşlevsel Çerezler</h4>
        <p>Kullanıcı tercihlerini (dil, bölge, oturum hatırlama vb.) saklayarak Platform’un kişiselleştirilmiş şekilde çalışmasını sağlar.</p>

        <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', fontWeight: 600 }}>c) Analitik / Performans Çerezleri</h4>
        <p>Platform’un kullanım biçimini analiz ederek performansın ölçülmesine ve geliştirilmesine yardımcı olur. Bu çerezler anonim veya toplulaştırılmış istatistiksel veriler üretir.</p>

        <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', fontWeight: 600 }}>d) Reklam ve Pazarlama Çerezleri</h4>
        <p>Kullanıcılara ilgi alanlarına uygun içerik ve kampanyalar sunulmasını sağlar. Bu çerezler yalnızca açık rıza verilmesi halinde kullanılmaktadır.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>4. Çerezlerin Kullanım Amaçları</h3>
        <p>Çerezler;</p>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Platform’un kesintisiz ve güvenli şekilde çalışmasını sağlamak,</li>
          <li>Kullanıcı deneyimini geliştirmek,</li>
          <li>Performans ve kullanım analizleri yapmak,</li>
          <li>Hizmetlerin iyileştirilmesi ve hata tespiti,</li>
          <li>Mevzuattan kaynaklanan yükümlülüklerin yerine getirilmesi amaçlarıyla kullanılmaktadır.</li>
        </ul>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>5. Hukuki Sebep</h3>
        <p>Zorunlu çerezler KVKK ve GDPR kapsamında veri sorumlusunun meşru menfaatine dayanılarak işlenmektedir. Zorunlu olmayan çerezler ise açık rızaya tabi olup, rıza verilmemesi halinde çalıştırılmaz.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>6. Kullanılan Çerezler ve Saklama Süreleri</h3>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><strong>Oturum Çerezleri:</strong> Oturum süresi boyunca saklanır</li>
          <li><strong>Tercih Çerezleri:</strong> 6 ay – 1 yıl</li>
          <li><strong>Analitik Çerezler:</strong> 1 – 2 yıl</li>
          <li><strong>Pazarlama Çerezleri:</strong> Açık rıza süresi boyunca</li>
        </ul>
        <p>Şirket, kullanılan çerez listelerini güncel tutar ve gerekli görüldüğünde değişiklik yapabilir.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>7. Üçüncü Taraf Çerezler</h3>
        <p>Platform üzerinde Google Analytics, Firebase, AWS, benzeri üçüncü taraf hizmet sağlayıcılar tarafından yerleştirilen çerezler veya SDK’lar kullanılabilir. Bu hizmet sağlayıcılar kendi gizlilik politikalarından sorumludur.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>8. Çerez Tercihlerinin Yönetilmesi</h3>
        <p>Kullanıcılar;</p>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Web sitesi üzerinden çerez tercih paneli veya tarayıcı ayarları,</li>
          <li>Mobil uygulama ayarları</li>
        </ul>
        <p>aracılığıyla çerez tercihlerini diledikleri zaman değiştirebilir.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>9. ABD Eyalet Mevzuatı Kapsamında Haklar</h3>
        <p>ABD eyalet mevzuatına tabi kullanıcılar, çerezler aracılığıyla gerçekleştirilen veri paylaşımları bakımından “satış” veya “paylaşım” faaliyetlerini reddetme hakkına sahiptir.</p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '1rem', fontWeight: 600 }}>10. Politika Güncellemeleri</h3>
        <p>Bu Politika güncellenebilir ve güncel hali Platform üzerinden yayımlanır.</p>
      </div>
    </div>
  );
};

export default CookiePolicy;
