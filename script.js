document.addEventListener("DOMContentLoaded", function () {
    const topics = {
        "1.1": `
            <h2>Java Nedir?</h2>
            <p>Java, nesne yönelimli, platform bağımsız bir programlama dilidir.</p>
            <ul>
                <li>Sun Microsystems (şu an Oracle) tarafından geliştirilmiştir.</li>
                <li>Güvenli, taşınabilir ve ölçeklenebilir olmasıyla bilinir.</li>
                <li>Android uygulamaları, web uygulamaları, büyük ölçekli sistemlerde sıkça kullanılır.</li>
            </ul>

            <h3>📌 Örneğin:</h3>
            <ul>
                <li>Minecraft oyunu Java ile yazılmıştır.</li>
                <li>Spring Boot ile web uygulamaları geliştirilir.</li>
            </ul>

            <h2>Java'nın Özellikleri Nelerdir?</h2>
            <p>Java’nın temel özellikleri şunlardır:</p>
            <ul>
                <li>✅ <b>Platform bağımsızdır</b> → JVM sayesinde her işletim sisteminde çalışır.</li>
                <li>✅ <b>Nesne yönelimlidir (OOP)</b> → Class, Object, Inheritance gibi kavramlar içerir.</li>
                <li>✅ <b>Güvenlidir</b> → Bellek yönetimi ve exception handling özellikleri vardır.</li>
                <li>✅ <b>Çok iş parçacıklı (Multithreading) destekler</b> → Aynı anda birden fazla işlem yapabilir.</li>
                <li>✅ <b>Otomatik bellek yönetimi (Garbage Collection)</b> → Kullanılmayan nesneleri temizler.</li>
                <li>✅ <b>Ağ tabanlıdır</b> → Web ve ağ programlamada sıkça kullanılır.</li>
            </ul>

            <h2>Data Types (Veri Tipleri)</h2>
    <p>Java’da veri tipleri temel olarak ikiye ayrılır:</p>
    
    <h3>1️⃣ Primitive (İlkel) Veri Tipleri:</h3>
    <ul>
        <li>🔢 <b>int</b> → Tamsayı (örn: <code>int a = 5;</code>)</li>
        <li>📏 <b>double</b> → Ondalıklı sayı (örn: <code>double pi = 3.14;</code>)</li>
        <li>✅ <b>boolean</b> → Doğru/Yanlış (<code>true / false</code>)</li>
        <li>🔤 <b>char</b> → Tek karakter (örn: <code>'A', 'b'</code>)</li>
    </ul>

    <h3>2️⃣ Non-Primitive (Referans Tipleri):</h3>
    <ul>
        <li>📝 <b>String</b> → Metin (örn: <code>"Merhaba Dünya"</code>)</li>
        <li>📊 <b>Array</b> → Dizi (örn: <code>int[] numbers = {1, 2, 3};</code>)</li>
        <li>🏗️ <b>Class</b> → Kullanıcı tanımlı türler</li>
        <li>🛠️ <b>Object</b> → Nesne yönelimli programlamada temel yapı taşı</li>
    </ul>

    <hr>

    <h2>Primitive Types Nedir?</h2>
    <p><b>Primitive types</b> (ilkel veri tipleri), Java'da en temel veri türleridir ve hafızada doğrudan değerleri saklarlar. Java'da nesne (object) değildirler, yani referans tipi değil, doğrudan bellekte depolanan veri türleridir.</p>

    <h3>📌 Java'daki Primitive Veri Tipleri:</h3>
    <table border="1" cellpadding="5">
        <tr>
            <th>Tip</th>
            <th>Bellek (Bit)</th>
            <th>Örnek Değer</th>
        </tr>
        <tr><td>byte</td><td>8 bit</td><td><code>byte a = 10;</code></td></tr>
        <tr><td>short</td><td>16 bit</td><td><code>short b = 300;</code></td></tr>
        <tr><td>int</td><td>32 bit</td><td><code>int c = 100000;</code></td></tr>
        <tr><td>long</td><td>64 bit</td><td><code>long d = 10000000000L;</code></td></tr>
        <tr><td>float</td><td>32 bit</td><td><code>float e = 3.14f;</code></td></tr>
        <tr><td>double</td><td>64 bit</td><td><code>double f = 3.1415926535;</code></td></tr>
        <tr><td>char</td><td>16 bit</td><td><code>char g = 'A';</code></td></tr>
        <tr><td>boolean</td><td>1 bit</td><td><code>boolean h = true;</code></td></tr>
    </table>

    <h3>📝 Primitive tiplerin özellikleri:</h3>
    <ul>
        <li>✅ Bellekte doğrudan saklanır.</li>
        <li>✅ Nesne (object) değildir, yani metot içermezler.</li>
        <li>✅ Daha hızlıdırlar çünkü doğrudan işlenirler.</li>
    </ul>
        
        <h2>Wrapper Types Nedir?</h2>
    <p><b>Wrapper types</b> (sarmalayıcı veri tipleri), primitive tiplerin Nesne (Object) haline getirilmiş versiyonlarıdır.</p>
    <ul>
        <li>🛠️ Java'da her primitive tipin bir <b>Wrapper (Sarmalayıcı) Sınıfı</b> bulunur.</li>
        <li>📦 Bu sınıflar, Java'nın nesne tabanlı yapısına daha uygun hale getirmek için kullanılır.</li>
        <li>📌 <b>Java Collection Framework</b> (List, Set, Map) gibi yapılarda primitive tipler kullanılamaz, ancak wrapper sınıfları kullanılabilir.</li>
    </ul>

    <h3>📌 Java'daki Wrapper Sınıfları:</h3>
    <table border="1" cellpadding="5">
        <tr>
            <th>Primitive Type</th>
            <th>Wrapper Class</th>
        </tr>
        <tr><td>byte</td><td>Byte</td></tr>
        <tr><td>short</td><td>Short</td></tr>
        <tr><td>int</td><td>Integer</td></tr>
        <tr><td>long</td><td>Long</td></tr>
        <tr><td>float</td><td>Float</td></tr>
        <tr><td>double</td><td>Double</td></tr>
        <tr><td>char</td><td>Character</td></tr>
        <tr><td>boolean</td><td>Boolean</td></tr>
    </table>

    <h3>📌 Örnek Kullanım:</h3>
    <div class="code-container">
        <pre><code id="code-wrapper-1">
// Primitive tür
int primitiveInt = 10;       

// Wrapper sınıf
Integer wrapperInt = 10;     

// Primitive tip ile işlem
int sonuc = primitiveInt + 5;

// Wrapper tip ile metot kullanımı
int maxDeger = Integer.max(10, 20);
System.out.println(maxDeger); // Çıktı: 20
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-wrapper-1')">📋 Kopyala</button>
    </div>

    <h3>📝 Wrapper tiplerin özellikleri:</h3>
    <ul>
        <li>✅ Nesne (Object) oldukları için metotlar içerebilirler.</li>
        <li>✅ <b>null</b> değeri alabilirler (primitive tipler alamaz).</li>
        <li>✅ Koleksiyon yapılarında (<b>ArrayList, HashMap</b> vb.) kullanılabilirler.</li>
    </ul>

    <hr>

    <h2>Primitive vs Wrapper Type Farkları:</h2>
    <table border="1" cellpadding="5">
        <tr>
            <th>Özellik</th>
            <th>Primitive Type</th>
            <th>Wrapper Type</th>
        </tr>
        <tr><td>Nesne (Object)</td><td>❌ Hayır</td><td>✅ Evet</td></tr>
        <tr><td>Bellekte saklama</td><td>Direkt değer</td><td>Referans ile saklanır</td></tr>
        <tr><td>Metot içerir mi?</td><td>❌ Hayır</td><td>✅ Evet (Metotlar içerir)</td></tr>
        <tr><td>Performans</td><td>✅ Daha hızlı</td><td>❌ Daha yavaş</td></tr>
    </table>

    <h3>📌 Ne Zaman Hangisi Kullanılır?</h3>
    <ul>
        <li>⚡ <b>Primitive types</b> → Daha hızlı ve hafif oldukları için hesaplamalarda, döngülerde tercih edilir.</li>
        <li>📦 <b>Wrapper types</b> → Koleksiyonlar (<b>ArrayList, HashMap</b> vb.) ve nesne tabanlı programlama için gereklidir.</li>
    </ul>

    <h3>📢 Özetle:</h3>
    <ul>
        <li>📌 <b>Primitive types</b>: <code>int</code>, <code>double</code>, <code>boolean</code> gibi hafızada direkt saklanan temel veri türleridir.</li>
        <li>📌 <b>Wrapper types</b>: <code>Integer</code>, <code>Double</code>, <code>Boolean</code> gibi Nesne (Object) haline getirilmiş versiyonlarıdır.</li>
    </ul>
        
        
        `,

        "1.2": `
            <h2>İsimlendirme Kuralları (Naming Conventions)</h2>
    <p>Farklı programlama dillerinde değişken, fonksiyon, sınıf isimlendirme kuralları olarak kullanılan üç temel yazım biçimi vardır.</p>

    <h3>1️⃣ camelCase Nedir?</h3>
    <p>camelCase, kelimelerin ilk harfi küçük, sonraki kelimelerin ilk harfi büyük olacak şekilde yazıldığı isimlendirme biçimidir.</p>
    <ul>
        <li>✅ İlk kelimenin tamamı küçük harf ile başlar.</li>
        <li>✅ Sonraki kelimelerin ilk harfi büyük yazılır.</li>
        <li>✅ Boşluk veya alt çizgi (_) kullanılmaz.</li>
    </ul>

    <h4>📌 Örnek Kullanım:</h4>
    <div class="code-container">
        <pre><code id="code-naming-1">
int myVariable = 10;
String userName = "Ahmet";
double totalPrice = 99.99;
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-naming-1')">📋 Kopyala</button>
    </div>

    <h3>2️⃣ PascalCase Nedir?</h3>
    <p>PascalCase, kelimelerin her birinin ilk harfi büyük olacak şekilde yazıldığı isimlendirme biçimidir.</p>
    <ul>
        <li>✅ Tüm kelimelerin ilk harfi büyük olur.</li>
        <li>✅ Boşluk veya alt çizgi (_) kullanılmaz.</li>
        <li>✅ camelCase'den farkı, ilk kelimenin de büyük başlamasıdır.</li>
    </ul>

    <h4>📌 Örnek Kullanım:</h4>
    <div class="code-container">
        <pre><code id="code-naming-2">
class StudentRecord { ... }
public void GetUserDetails() { ... }
String FirstName = "Ali";
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-naming-2')">📋 Kopyala</button>
    </div>

    <h3>3️⃣ kebab-case Nedir?</h3>
    <p>kebab-case, kelimelerin küçük harflerle yazıldığı ve kelimelerin arasında - (tire) kullanıldığı isimlendirme biçimidir.</p>
    <ul>
        <li>✅ Tüm harfler küçük yazılır.</li>
        <li>✅ Kelime ayracı olarak tire (-) kullanılır.</li>
        <li>✅ JavaScript, CSS, URL’lerde kullanılır.</li>
    </ul>

    <h4>📌 Örnek Kullanım:</h4>
    <div class="code-container">
        <pre><code id="code-naming-3">
.button-primary {
  background-color: blue;
}
https://www.example.com/user-profile
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-naming-3')">📋 Kopyala</button>
    </div>

    <h3>📌 Karşılaştırma Tablosu:</h3>
    <table border="1" cellpadding="5">
        <tr>
            <th>Yazım Stili</th>
            <th>Özellikleri</th>
            <th>Örnek Kullanım</th>
            <th>Kullanıldığı Yerler</th>
        </tr>
        <tr><td>camelCase</td><td>İlk kelime küçük, sonraki kelimelerin ilk harfi büyük</td><td>myVariableName</td><td>Değişken ve metot isimleri (Java, JS, Python)</td></tr>
        <tr><td>PascalCase</td><td>Tüm kelimelerin ilk harfi büyük</td><td>MyClassName</td><td>Sınıf ve metot isimleri (Java, C#, .NET)</td></tr>
        <tr><td>kebab-case</td><td>Küçük harf, kelimeler tire (-) ile ayrılır</td><td>user-profile</td><td>CSS class isimleri, URL yapıları</td></tr>
    </table>

    <hr>

    <h2>📌 Java Common Rules (Java Ortak Kuralları)</h2>

    <h3>1️⃣ Class İsimlendirme Kuralları</h3>
    <ul>
        <li>✔ Class isimleri <b>PascalCase</b> formatında yazılır.</li>
        <li>✔ <b>Bir .java dosyasında yalnızca bir tane public class olabilir.</b></li>
        <li>✔ Java’da static class yoktur (inner class hariç).</li>
    </ul>

    <h4>📌 Örnek:</h4>
    <div class="code-container">
        <pre><code id="code-naming-4">
class BankAccount { ... }
class UserProfile { ... }
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-naming-4')">📋 Kopyala</button>
    </div>

    <h3>2️⃣ Paket (Package) İsimlendirme Kuralları</h3>
    <ul>
        <li>✔ Paket isimleri <b>küçük harflerle</b> yazılır.</li>
        <li>✔ Paket isimleri <b>fiil içermez</b> (mak-mek kullanmayız).</li>
    </ul>

    <h4>📌 Örnek:</h4>
    <div class="code-container">
        <pre><code id="code-naming-5">
package com.company.project;
package database.connection;
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-naming-5')">📋 Kopyala</button>
    </div>

    <h3>🚀 Özet:</h3>
    <ul>
        <li>✅ <b>Class isimleri</b> PascalCase formatında yazılır.</li>
        <li>✅ <b>Bir .java dosyasında yalnızca bir tane public class olabilir.</b></li>
        <li>✅ <b>Java’da static class yoktur</b> ama static inner class olabilir.</li>
        <li>✅ <b>Paket isimleri</b> küçük harf ve kısa, net bir şekilde yazılmalıdır.</li>
    </ul>
          
        <h2>Primitive Type vs Wrapper Type Karşılaştırması</h2>
    <table border="1" cellpadding="5">
        <tr>
            <th>Özellik</th>
            <th>Primitive Type</th>
            <th>Wrapper Type</th>
        </tr>
        <tr><td>Bellekte Saklama</td><td>Direkt değer saklanır</td><td>Referans (Object) olarak saklanır</td></tr>
        <tr><td>Nesne (Object) mi?</td><td>❌ Hayır</td><td>✅ Evet</td></tr>
        <tr><td>Performans</td><td>✅ Daha hızlı</td><td>❌ Daha yavaş</td></tr>
        <tr><td>Metot İçerir mi?</td><td>❌ Hayır</td><td>✅ Evet (Integer.parseInt(), toString() gibi)</td></tr>
        <tr><td>Koleksiyonlarda Kullanılabilir mi?</td><td>❌ Hayır</td><td>✅ Evet (ArrayList<Integer> gibi)</td></tr>
        <tr><td>Null Değeri Alabilir mi?</td><td>❌ Hayır</td><td>✅ Evet (Integer number = null;)</td></tr>
    </table>

    <h2>Autoboxing ve Unboxing (Dönüşüm İşlemi)</h2>
    <p>Java, Primitive Type ve Wrapper Type arasında otomatik dönüşüm yapabilir. Buna Autoboxing ve Unboxing denir.</p>

    <h4>📌 Autoboxing (Primitive → Wrapper)</h4>
    <div class="code-container">
        <pre><code id="code-autoboxing">
int num = 10;
Integer obj = num; // Autoboxing
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-autoboxing')">📋 Kopyala</button>
    </div>

    <h4>📌 Unboxing (Wrapper → Primitive)</h4>
    <div class="code-container">
        <pre><code id="code-unboxing">
Integer obj = 20;
int num = obj; // Unboxing
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-unboxing')">📋 Kopyala</button>
    </div>

    <h2>Ne Zaman Primitive, Ne Zaman Wrapper Kullanmalıyız?</h2>
    <ul>
        <li>✅ <b>Primitive Type Kullan</b>
            <ul>
                <li>Performans önemliyse</li>
                <li>Döngülerde, hesaplamalarda</li>
                <li>Bellek tüketimini en aza indirmek için</li>
            </ul>
        </li>
        <li>✅ <b>Wrapper Type Kullan</b>
            <ul>
                <li>Koleksiyonlarla (ArrayList, HashMap) çalışırken</li>
                <li>null değeri atanması gerekiyorsa</li>
                <li>Ekstra metot kullanılması gerekiyorsa (Integer.parseInt(), toString() gibi)</li>
            </ul>
        </li>
    </ul>

    <h2>Stack Memory vs Heap Memory</h2>
    <p>Java'da bellek yönetimi Stack ve Heap olmak üzere iki farklı bölümde yapılır.</p>

    <h3>📌 Stack Memory (Yığın Bellek)</h3>
    <ul>
        <li>🔹 Küçük ve hızlı bir bellek alanıdır.</li>
        <li>🔹 Yerel değişkenler (local variables) burada tutulur.</li>
        <li>🔹 Metot çağrıları burada işlenir.</li>
        <li>🔹 Son giren ilk çıkar (LIFO - Last In First Out) mantığıyla çalışır.</li>
    </ul>

    <h4>📌 Örnek:</h4>
    <div class="code-container">
        <pre><code id="code-stack">
public class Test {
    public static void main(String[] args) {
        int number = 10;  // Stack'te saklanır
    }
}
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-stack')">📋 Kopyala</button>
    </div>

    <h3>📌 Heap Memory (Yığın Bellek)</h3>
    <ul>
        <li>🔹 Büyük nesnelerin saklandığı alandır.</li>
        <li>🔹 Java'daki tüm nesneler (new ile oluşturulan objeler) burada saklanır.</li>
        <li>🔹 Garbage Collector (Çöp Toplayıcı) tarafından yönetilir.</li>
    </ul>

    <h4>📌 Örnek:</h4>
    <div class="code-container">
        <pre><code id="code-heap">
class Student {
    String name; // Heap memoryde saklanır
}

public class Test {
    public static void main(String[] args) {
        Student student = new Student(); // Heap'te yer kaplar
    }
}
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-heap')">📋 Kopyala</button>
    </div>

    <h2>Escape Characters (Kaçış Karakterleri)</h2>
    <p>Escape karakterler, özel anlam taşıyan karakterleri String içinde kullanmamızı sağlar. Java'da kaçış karakterleri <code>\\</code> (ters eğik çizgi) ile başlar.</p>

    <table border="1" cellpadding="5">
        <tr>
            <th>Escape Karakter</th>
            <th>Anlamı</th>
            <th>Örnek Kullanım</th>
        </tr>
        <tr><td>\\n</td><td>Yeni satır (New Line)</td><td>"Merhaba\\nDünya"</td></tr>
        <tr><td>\\t</td><td>Tab (Boşluk bırakır)</td><td>"Merhaba\\tDünya"</td></tr>
        <tr><td>\\\"</td><td>Çift tırnak ekler</td><td>"Bu bir \\\"test\\\" mesajıdır"</td></tr>
        <tr><td>\\\'</td><td>Tek tırnak ekler</td><td>"O\\'Brien"</td></tr>
        <tr><td>\\\\</td><td>Ters eğik çizgi ekler</td><td>"C:\\\\Users\\\\Dosya"</td></tr>
    </table>

    <h4>📌 Örnek:</h4>
    <div class="code-container">
        <pre><code id="code-escape">
public class EscapeExample {
    public static void main(String[] args) {
        System.out.println("Merhaba\\nDünya");
        System.out.println("Bu bir \\\"test\\\" mesajıdır");
    }
}
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-escape')">📋 Kopyala</button>
    </div>
        `,
        "2.1":`
            <h2>Maven Nedir?</h2>
            <p>Maven, Java projelerini yönetmek ve derlemek için kullanılan bir proje yönetim ve bağımlılık yönetim aracıdır.</p>
            <ul>
                <li>✅ XML tabanlı bir pom.xml dosyası kullanarak bağımlılıkları otomatik olarak yönetir.</li>
                <li>✅ Build (derleme), test, dağıtım gibi süreçleri kolaylaştırır.</li>
                <li>✅ Apache tarafından geliştirilmiştir.</li>
            </ul>
            <p> 📌 Örneğin: Eğer projen bir kütüphane gerektiriyorsa (Spring Boot, JUnit gibi), Maven onu otomatik olarak indirip projenin içine ekler.</p>

            <h2>pom.xml Nedir?</h2>
            <p><b>pom.xml</b>, Maven projelerinde kullanılan bir yapılandırma dosyasıdır.</p>
            <ul>
             <li><b>POM</b> = Project Object Model anlamına gelir.</li>
             <li>Proje bağımlılıkları, eklentiler (plugins), versiyon bilgileri ve yapılandırma ayarlarını içerir.</li>
            </ul>

           <h3>📌 Örnek bir pom.xml dosyası:</h3>
          <div class="code-container">
            <pre><code id="code-pom">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;groupId&gt;com.example&lt;/groupId&gt;
    &lt;artifactId&gt;myapp&lt;/artifactId&gt;
    &lt;version&gt;1.0.0&lt;/version&gt;

    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
            &lt;version&gt;2.5.4&lt;/version&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/project&gt;
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-pom')">📋 Kopyala</button>
          </div>

           <p>Bu dosya sayesinde, proje otomatik olarak bağımlılıkları indirip yönetebilir.</p>

        <h2>Compiler Nedir?</h2>
    <p><b>Compiler (Derleyici)</b>, Java gibi dillerde yazılan kodları makine diline çeviren bir programdır.</p>
    <ul>
        <li>Java için compiler: <b>javac</b></li>
        <li>Java kodlarını (<code>.java</code> uzantılı dosyalar) <b>bytecode</b> adı verilen <code>.class</code> dosyalarına çevirir.</li>
    </ul>

    <h3>📌 Örneğin:</h3>
    <p>Java kodunu derler ve HelloWorld.class oluşturur</p>
    <div class="code-container">
        <pre><code id="code-compiler"> javac HelloWorld.java </code></pre>
         <button class="copy-btn" onclick="copyCode('code-compiler')">📋 Kopyala</button>
         </div>
    <p> JVM tarafından çalıştırılır</p>
    <div class="code-container">
        <pre><code id="code-compiler"> java HelloWorld </code></pre>
        <button class="copy-btn" onclick="copyCode('code-compiler')">📋 Kopyala</button>
    </div>
        
        <h2>Interpreter Nedir?</h2>
    <p><b>Interpreter (Yorumlayıcı)</b>, kodu satır satır çalıştıran bir programdır.</p>
    <ul>
        <li>🔄 Java’da JVM içindeki <b>"Just-In-Time" (JIT) Compiler</b>, hem derleyici hem yorumlayıcı gibi çalışır.</li>
        <li>📝 Python, JavaScript gibi diller tamamen yorumlayıcıdır, <b>Java ise hem derleyici hem yorumlayıcı</b> kullanır.</li>
    </ul>
    <p>📌 Örneğin: Python’da bir hata varsa, yorumlayıcı kodun o satırında hata verir ve çalışmayı durdurur. Ancak Java, önce derleme yapar, sonra çalıştırır.</p>
    
        <h2>public static void main(String[] args) Açıklaması</h2>
    <p>Java programları <code>main</code> metodu olmadan çalışmaz! Çünkü <b>JVM (Java Virtual Machine)</b>, çalıştırılacak bir giriş noktası arar. Yani Java programlarının başlatılma noktası budur.</p>

    <h4>📌 Örnek:</h4>
    <div class="code-container">
        <pre><code id="code-main">
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Merhaba, Dünya!");
    }
}
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-main')">📋 Kopyala</button>
    </div>

    <h3>1️⃣ public Neden Kullanılır?</h3>
    <p><code>public</code>, metodu herkesin (JVM dahil) çağırabilmesini sağlar.</p>
    <ul>
        <li>✔ JVM bu metodu çağırabilmelidir, aksi halde program çalışmaz!</li>
        <li>❌ Eğer <code>private</code> yapsaydık, JVM erişemezdi.</li>
    </ul>

    <h4>📌 Yanlış Kullanım:</h4>
    <div class="code-container">
        <pre><code id="code-private-main">
private static void main(String[] args) { // Yanlış! JVM erişemez
    System.out.println("Bu çalışmaz!");
}
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-private-main')">📋 Kopyala</button>
    </div>

    <h3>2️⃣ static Neden Kullanılır?</h3>
    <p><code>static</code>, metodun nesne oluşturmadan çağrılmasını sağlar.</p>
    <ul>
        <li>✔ Java'da bir metodu çağırmak için normalde bir nesne (<code>new ClassName()</code>) oluşturman gerekir.</li>
        <li>✔ Ancak JVM direkt çalıştırabilmeli, yani nesne oluşturmadan <code>main</code> metoduna ulaşabilmelidir.</li>
    </ul>

    <h4>📌 Örnek (Doğru Kullanım):</h4>
    <div class="code-container">
        <pre><code id="code-static">
public class Test {
    static void greet() { 
        System.out.println("Merhaba!");
    }

    public static void main(String[] args) {
        greet(); // Nesne oluşturmadan çağırabiliriz
    }
}
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-static')">📋 Kopyala</button>
    </div>

    <h4>📌 Yanlış Kullanım (Static Olmazsa Hata):</h4>
    <div class="code-container">
        <pre><code id="code-non-static">
public class Test {
    void greet() { // static değil!
        System.out.println("Merhaba!");
    }

    public static void main(String[] args) {
        greet(); // HATA! Static değil
    }
}
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-non-static')">📋 Kopyala</button>
    </div>

    <h3>3️⃣ void Neden Kullanılır?</h3>
    <p><code>void</code>, metodun geri dönüş değeri olmadığını gösterir.</p>
    <ul>
        <li>✔ <code>main</code> metodu sadece programı çalıştırmak içindir, hiçbir değer döndürmez.</li>
        <li>❌ Eğer <code>int</code> gibi bir dönüş tipi belirleseydik, JVM bu değeri nereye koyacağını bilemezdi.</li>
    </ul>

    <h4>📌 Yanlış Kullanım:</h4>
    <div class="code-container">
        <pre><code id="code-void">
public static int main(String[] args) { // Yanlış! JVM ne yapacağını bilemez
    return 0;
}
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-void')">📋 Kopyala</button>
    </div>

    <h3>4️⃣ String[] args Neden Kullanılır?</h3>
    <p><code>String[] args</code>, komut satırından argüman almayı sağlar.</p>
    <ul>
        <li>✔ Kullanıcı programı çalıştırırken dışarıdan parametre geçebilir.</li>
    </ul>

    <h4>📌 Örnek:</h4>
    <div class="code-container">
        <pre><code id="code-args">
public class CommandLineExample {
    public static void main(String[] args) {
        System.out.println("İlk argüman: " + args[0]);
    }
}
        </code></pre>
        <button class="copy-btn" onclick="copyCode('code-args')">📋 Kopyala</button>
    </div>

    <h4>📌 Çalıştırma:</h4>
    <p>Eğer bu programı şu şekilde çalıştırırsak:</p>
    <div class="code-container">
        <pre><code>java CommandLineExample Merhaba</code></pre>
    </div>
    <p>📌 Çıktı:</p>
    <div class="code-container">
        <pre><code>İlk argüman: Merhaba</code></pre>
    </div>

    <h3>📢 Özet:</h3>
    <table border="1" cellpadding="5">
        <tr>
            <th>Bölüm</th>
            <th>Anlamı</th>
        </tr>
        <tr><td><code>public</code></td><td>JVM'in metodu çağırabilmesi için herkesin erişmesine izin verir.</td></tr>
        <tr><td><code>static</code></td><td>JVM'in nesne oluşturmadan direkt çağırmasını sağlar.</td></tr>
        <tr><td><code>void</code></td><td><code>main</code> metodu geri dönüş değeri döndürmez.</td></tr>
        <tr><td><code>String[] args</code></td><td>Komut satırı argümanlarını alır.</td></tr>
    </table>

    <h3>📌 Sonuç:</h3>
    <p><code>public static void main(String[] args)</code> Java programlarının başlangıç noktasıdır ve JVM'in çağırabilmesi için gereklidir. 🚀</p>
        
         <h2> JDK Nedir?</h2>
            <p>JDK (Java Development Kit), Java ile uygulama geliştirmek için gerekli tüm araçları içeren bir yazılım paketidir. </p>
            <ul>
                <li> İçinde JRE (Java Runtime Environment), Javac (Java Compiler), JVM (Java Virtual Machine) gibi bileşenler bulunur.</li>
                <li> Java kodlarını yazmak, derlemek ve çalıştırmak için kullanılır.</li>
            </ul>
            <p> 📌 Örneğin: Eğer Java kodu yazıyorsan ve derlemek istiyorsan, JDK yüklü olmalıdır.</p>
            
            <h2> JRE Nedir?</h2>
            <p>JRE (Java Runtime Environment), Java programlarını çalıştırmak için gereken ortamdır.</p>
            <ul>
                <li> İçinde JVM (Java Virtual Machine) ve Java kütüphaneleri bulunur.</li>
                <li> Ancak derleme işlemi yapamaz, yani Java kodu yazıp çalıştırmak için JDK gerekir.</li>
            </ul>
            <p> 📌 Örneğin: Eğer sadece Java uygulamalarını çalıştırmak istiyorsan, JRE yeterlidir. Ama Java geliştirmek için JDK gerekir.</p>

            <h2>JVM Nedir?</h2>
            <p><b>JVM (Java Virtual Machine)</b>, Java programlarının çalıştırıldığı sanal bir makinedir.</p>
            <ul>
              <li>🖥️ <b>"Write once, run anywhere"</b> (Bir kez yaz, her yerde çalıştır) prensibini sağlar.</li>
              <li>⚡ Farklı işletim sistemleri için bağımsız çalışabilen bir ortam sunar.</li>
              <li>🔁 Bytecode'u işletim sisteminin anlayacağı makine koduna çevirir.</li>
            </ul>
            <p>📌 Örneğin: Windows’ta derlediğin bir Java programını, Linux’ta veya macOS’ta çalıştırabilirsin, çünkü her sistemde JVM vardır.</p>

        `,
        "2.2":`

        `,

    };

    let topicKeys = Object.keys(topics);
    let currentIndex = 0;
    const contentArea = document.getElementById("content-area");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const menuLinks = document.querySelectorAll(".sidebar ul li a");

    function loadTopic(index) {
        currentIndex = index;
        contentArea.innerHTML = topics[topicKeys[currentIndex]];
    }

    menuLinks.forEach((link, index) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            loadTopic(index);
        });
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            loadTopic(currentIndex - 1);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < topicKeys.length - 1) {
            loadTopic(currentIndex + 1);
        }
    });

    loadTopic(0);
});

// Kopyalama Fonksiyonu
function copyCode(elementId) {
    let codeElement = document.getElementById(elementId);
    let text = codeElement.innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Kod kopyalandı! 📋");
    }).catch(err => {
        console.error("Kopyalama hatası: ", err);
    });
}