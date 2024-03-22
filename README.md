Đã rất lâu trước khi tôi viết bài báo, và hôm nay viết sẽ tập chung về thuật toán nó là cơn đau đầu cho chúng ta. Tôi dự định thu thập một tóm tắt của thông tin thuật toán nhiều nhất mà tôi có đọc và nghiên cứu.Nó sẽ dài nhưng tôi hào hứng đào sâu nó cùng với bạn

Để hiểu biết chủ đề của thuật toán , tôi nghĩ nó cần thiết có một số sự hiểu biết của cấutrúc dữ liệu. nẾu bạn thích nhìn, tôi bao gồm 1 số liên kết vào đây trước khi chúng ta bắt đầu

Chủ đề chúng ta sẽ tập chung ở bài báo:
* cái gì là thuật toán?
* Nguyên tắc cơ bản của phân tích thuạt toán
* Hiệu suất phân tích của thuật toán
* Kí hiệu Big-O
* Các trường hợp tốt và xấu
* Kỹ thuật thiết kế thuật toán
* Chiến lược tìm kiếm thuật toán
* Ví dụ của 1 số kiến thức thuật toán

THUẬT TOÁN

Thuật toán là 1 phần của hướng dẫn cho hoàn thành nhiện vụ. Mục đích của thuật toán là cung cấp hướng dẫn cho giải quyết vấn đề, những yêu cầu đầu ra cụ thể có được cho 1 số giá trị đầu vào trong khoảng thời gian cụ thể. Tất cả đoạn mã đều được gọi là thuật toán

Việc sử dụng của thuật toán là phổ biến rộng rãi trong giải quyết vấn đề ,  cải tiến hiệu quả và sự đổi mới xung quanh các miền khác nhau.  Tầm quan trong của chúng ở trong sự tiến bộ của công nghệ, khoa học và ứng dụng thực tế khi chúng ta đưa ra các giải pháp có cấu trúc và hiệu quả cho nhiều thách thức khác nhau

https://miro.medium.com/v2/resize:fit:720/format:webp/1*7mAiRFNfJvtYGzsL2yjLIA.jpeg


Phương pháp của chỉ định thuật toán

Một số thời gian thuật toán là mô tả trong chữ ( trong miễn phí và bước nhảy hình thức) hay trong mã giả

Sử dụng ngon ngữ tự nhiên có một sự hấp dẫn rõ ràng, tuy nhiên, sự mô hồ vốn có của 1 số ngôn ngữ tự nhiên làm cho việc mô tả và rõ ràng của một thuật toán khác thật ngạc nhiên
Tuy nhiên, có thẻ làm điều này là một kỹ năng quan tọng mà bạn nên cố gắng phát triển trong quá trình của việc học thuật toán
* Ngôn ngữ tự nhiên: Thuật toán có thể mổ tả sử dụng ngôn ngữ tự nhiên, như tiếng anh. Phương pháp là có thể tiếp cận được với nhiều đối tương nhưng thiếu độ chính xác và yêu cầu tự nhiên rõ ràng cho thuật toán phức tạp

*Mã giả: Thuật toán nó kết hợp các yếu tố của cả ngôn ngữ tự nhiên và ngôn ngữ lập trình quy ước là biết như mã giả, nó là không chính thức, mô tả cao cấp. Nó là nhiều cấu trúc hơn ngôn ngữ tự nhiên và giúp thu hẹp khoảng các giữa sự hiểu biết con người và code. Mã giả, như một tên gợi ý, là code lỗi hay là đại diện của code nó có thể hiểu bởi một của người có hiểu biết lâp trình cấp 




Ví dụ: Tính số Fibonacci đến 50

Mã giả

1-Khai báo một biến số nguyên gọi là n
2-Khai báo tổng biến số nguyên
3-Khai báo biến số nguyên f1
4-Khai báo biến số nguyên f2
5-Đặt tổng thành 0
6-Đặt f1 và f2 thành 1
7-Đặt n thành 50
8-Lặp lại n lần
a.sum=f1+f2
b.f2=f1
c.f1=tổng
d.print tổng
Vòng 9 đầu

* Lưu đồ: trong những ngày đầu tiên của tin học, phương tieenh chủ yếu cho thuật toán chỉ định là Lưu đồ, phương pháp của bày tỏ thuật toán bởi bộ sưu tập của các dạng hình học được kết nối chứa các mô tả về các bước của thuật toán

* Mã ngôn ngữ lập trình: Một phương pháp có độ chính xác cao là viết thuật toán trực tiếp bằng ngôn ngữ lâp trình.Nó phù hợp khi mục tiêu là triển khai thuật toán trong phần mềm. Tuy nhiên, nó có thể khó tiếp cận hơn đối với những người không phải là lập trình viên





Nguyên tắc cơ bản của phân tích thuật toán


Chúng ta thường xuyên muốn thuật toán của chúng ta sẽ sở hữu một vài phẩm chất. Trước sự đứng đắn, bởi xa một điều quan trọng nhất là hiệu quả

2 loại của hiệu quả thuân toán là: hiệu quả thời gian, chỉ ra các nhanh nhất chạy thuật toán, và hiệu quả trong gian chỉ ra thêm bộ nhớ chúng xử dụng

Một đặc tính mong muốn kahsc của thuật toán là tính đơn giarn. Không hioonhs như hiệu quả, có thể được xác đinh và nghiên cứu một cách chính xác bằng sự chặt chẽ về mặt toán học, sự đơn giản, giống như vẻ đẹp, ở một độ đáng kể trong mắt người nhùn, Đôi khi các thuajtat toán đơn gairn hơn và cũng hiệu quả hơn, Thật không may, nó là không thường đúng, trong một só tường hợp sự khôn ngoan thỏa hiệp cần được mang ra


Tuy nhiên, một số đặc tính mong muốn khác của thuật toán là tính tổng quát, Trên Thực tế có hau vấn đề ở đây: Tính tổng quát của vấn deedef mà thuaatn topasn gải quyết và tapapj hợp đầu vào mà thuật toán chấp nhận. 

Nếu bạn hài lòng vboiws tính hiệu quả, tính đơn giản hoặc tính tổng quát  của thuật tóa, bạn phải quay jlaij bảng vẽ và thiết kế lại thuật toán

Một số vấn đề quan trọng của tuạt toán giải quyeeest ván dề là câu hỏi của liệu hoặc mọi vấn đề không có thể giải quyết bioiwr thuật toán. Chúng ta không thể nói về vấn đề nó không có trong giải pháp, cũng như tìm cội nguồn thực sự của phương trình bậc 2 với phân biết đối sử tiêu cụ, ĐÓi những với trường hợp, kết quả đàu ra chỉ ra ràng vấn đề trong có giải pháp là tất cả chúng ra có thể và mong đợi từu thuật toán



We can give the Königsberg Bridge Problem as an example of an algorithm that has no solution. If you’re wondering what it is, I’ve added a link here for you to research.



Chúng ta cũng không nói về những vấn đề thuật toán. Ngay cỏa một số vấn đề rõ ràng nó phải có câu trả lời đúng hoặc không cũng không được thế giải quyết,I.e.., không thể giải quyết bởi thuật toán

Tóm lại, việc khiến khai một rhuaajt toán một cách chinh xác là cần thiết nhưng không đủ: bạn muốn không thích làm giảm sức mạnh của thuật toán bỏi việc khiển khai không hiệu quả


Hiệu quả phân tích của thuật toán


Một vài giải pháp khác hay thuật toán chỉ đánh giá cho của họ hiệu suất và hiệu quả, bao gồm thời gian nó có thể chạy/ thực thi và tổng bộ nhớ dã tiệu thụ

HIệu suất của thuật toán phát sinh bởi câu hỏi của đo lường hiệu suất của thuật toán

Vấn đề này phát sinh khi lựa chọn thuật toán”Tốt nhất” trong số các thuạt toán udwojc đưa ra để giải qmoojt bài toán, Ba phương pháp cơ bản thường được sử dụng đẻ do hiệu suất của thuật toasnL đó là phân tích thử nghiêm, phân tích xác suất( trường hợp trung bình) và phân tích trường hợp xấu nhất, Ưu tiên của chúng tôi sẽ là tập trung vào phân tích trường hợp xấu nhất, được kết nối với ký hieeun Big-O mà chúng tôi dự đinh đưa ra




		Phân tích trường hợp xấu nhất là phân tích độ leehcj so với mực tối ưu xảy ra khi áp dụng heuritic H đặc biệt cho các trường hợp của bài toán P. Đọ phức tạp của thuật toán liên quan đến thời gian thực hiện của nó. Thời gian mà một thuật toán yêu cầu, còn được gọi là thời gian chạy, phụ thuộc vào cả cấu trúc, kích thước của dữ liệu

Hiệu quả trong trường hợp xấu nhất của thuật toán là nó hiệu quả cho trường hợp  vàoxấu  của độ n, chúng là đầu nào ( hoặc nhiefu đầu vào_ của độ lớn n cho thuật toán chạy có độ dài giữa tất cả khả thu đàu vào của độ lớn

Để so sánh và xếp các bật tăng trưởng. Các nhà khoa học máy tính sử dụng 3 ký hiệu: Big oh, Big omega and big theta. Của 3 phương pháp, chúng ta sẽ chỉ tập chung vào ký hiệu Big-O





BIG-O Notation

Trong khoa học máy tính, ký hiệu O lớn được sử dụng để phân loại các thuật toán theo yêu cầu về thời gian hoặc không gian chạy của chúng tăng lên khi kích thước đầu vào tăng lên






Kỹ thuật thiết kế thuật toán






Một số ví dụ về thuật toán

Chia và chinh phục

Thuật toán chia và chinh phục theo công việc theo dõi từ kế hoạch tổng quát

* vấn đề là chia thành nhiều bài toán con cùng loại, lý tưởng nhất là có kích thước bằng nhau

*Các bài tóan con được giải( thường là đệ quy, mặc dù một số thời điều là thuật toán khác là sử dụng, đặc biết là khi các bài toán con thành đủ nhỏ
Nếu cần thiết, phương pháp của các bài toán con được kết hợp để có được lời giải cho bài toán ban đầu

Sắp xếp hợp nhất

Sắp xếp hợp nhất là ví đụ tuyetj vời nhất của một ứng dụng của chia và kỹ thuật chinh phục. Nó được định ngữa là thuật toán sắp xếp hoạt động bằng cách chia một mảng thành các mảng nhỏ hơn sắp xếp từng mảng con và sau đó hợp nhất với nhau để tạo tahfnh mảng được sắp xếp cuối cùng

		Sắp xếp hợp nhất là một thuật toán đẹ quy liên tục chia mảng làm đôi cho đến khi không thê chia thêm được nữa, tức là mảng chỉ có một phần tử( 1 mảng có 1 phần tử luôn được sắp xếp). Sau đó các mảng con được sắp xếp được hợp nhất thành một mảng đã sắp xếp

https://en.m.wikipedia.org/wiki/File:Merge-sort-example-300px.gif


Các ứng dụng của Sắp xếp Hợp nhất:

*Sắp xếp các tập dữ liệu lớn (Độ phức tạp về thời gian trong trường hợp xấu nhất là O(n log n))
*Sắp xếp bên ngoài
*Sắp xếp tùy chỉnh
*Vấn đề đếm đảo ngược

Let’s code:


Sắp xếp nhanh chóng
Quicksort là thuật toán sắp xếp quan trọng khác dựa trên phương pháp chia để trị. Không giống như mergesort chia các phần tử đầu vào theo vị trí của chúng trong mảng, quicksort chia chúng theo giá trị của chúng.


https://en.m.wikipedia.org/wiki/File:Quicksort-example.gif

Quá trình chính trong “Sắp xếp nhanh” là phân vùng(). Các phân vùng nhằm mục đích định vị trục xoay (có thể là bất kỳ phần tử nào) vào đúng vị trí trong mảng đã sắp xếp. Đặt tất cả các phần tử nhỏ hơn ở bên trái của trục và tất cả các phần tử lớn hơn ở bên phải của trục






Cây nhị phân


Các thuật toán chia để trị quan trọng nahast cho cây nhị phân là ba ghép duyệt cổ điể: thứ tự trước, thứ tự trong, thứ tự sau. Tất cả ba lần duyệt đều truy cập các nút của cây nhị phân một cash đệ quy. Tức là  bằng cách truy cập vào gooccs của cây cũng như các cây con trái, phải của cây.Chúng chỉ khác nhau ở thoiwdf điển truy cập của root

*Trong quá trình duyệt theo thứ tự trước, gốc, được duyệt trước khi thăm caya con trái, phải( trong thứ tự)

An example of “Preorder Traversal”

*Trong duyệt theo thứ tự, nút gốc được truy cập sau khi thăm cây con bên trái của nó nhưng trước khi thăm cây con bên phải

An example of “Inorder Traversal”
*Trong quá trình duyệt theo thứ tự sau, gốc được truy cập sau khi truy cập cây con trái và cây con phải (trong thứ tự)

 

Biến đổi và chinh phục

Biến đổi và chinh phục công việc như tiến hành theo 2 giai đoạn, Đầu tiên, trong giai đoạnđiến đổi, trường hợp của vấn đề được sửa đổi, vì nó do này hay khác, nhiều nhiều hợp với giải pháp.Sau đó, ở giai đoạn thứ hai hay giai đoạn chinh phục, nó đều giải quyết


* Sắp xếp trước
*Cây
* Đống và sắp xếp đống

Hãy chọn thuật toán sắp xếp đống để kiểm tra

Sắp Xếp Đống

Đống là Cây nhị phân hoàn chỉnh trong giá trị tại mỗi nút lớn hơn hoặc nhỏ hơn các nút con của nó. Có 2 loại Đống”

*Đống tối đa: là giá trị mỗi nút lớn hơn so với các nút con của nó
* ĐỐng tối thiểu: là giá trị mỗi nút nhỏ hơn so với các nút con của nó

Tăng cường là hình thức hoạt động của xây dựng đóng cho thành phần của mảng. Hoạt động tăng cường cần sử dụng để xây dụng đống tối đa hoặc đống nhỏ nhất



Trong ví dụ về cây dưới đây, Tất cả cha mẹ đều được xế nhỏ hơn con cái của hộ(đống tối thiểu)


Để không làm bài dài hơn chúng ra sẽ  bỏ qua thao tác xóa, thêm dữ liệu và xem xét việc sắp xếp

Lập trình năng động 

Lập trình năng động là ngôn ngữ kĩ sư máy tính ở đó vấn đề thuật toán là 1 vấn đề thuật toán trước tiên được chia thành các vấn đề phụ, kết quả được lưu lại và sau đó các vấn đề phụ được tối ưu hóa để tìm ra giải pháp tổng thể- thường liên quan đến việc tìm giá trị lớn nhất và nhỏ nhất phạm vi của truy vấn thuật toán

* Hàng xu
* Vấn đề ba lô
* Thuật toán của warshall và floyd

Vấn đề hàng xu


Some coins, of various denominations, are arranged in a line.


2 người chơi lần lượt lấy 1 đồng xu ở hai đầu hàng. Họ có thể tự do lựa chọn đầu hàng nào để lấy đồng xu ,nhưng  không được phép lấy đồng xu tiwf giữa hàng. Người chiến thằng trong trò chơi là người thu thập được nhiều đồng xu nhất

Peter Winkler, trong sách của anh ta Mathematical Puzzles, mô tả một chiến lược đơn giản được đảmbảo có hiệu quả nhưng chỉ khi đồng xu là số chẵn

Nếu số của đồng xu là Chỉ

Nếu tổng số đồng xu lẻ lớn hơn thì người chơi 1 bắ đầu trò chơi với đồng xu thứ nahast và tiếp tục lấy các đồng xu lẻ. Ngược lại, người chơi 1 lấy đồng xu cuối cùng và tiếp tục lấy đồng xu chẵn. Điều này có thể thực hiện được vì khi bắt đầu trò cvhoiw người chơi 1 có quyền lựa chọn là chọn đồng xu đầu tieefnn là lẻhoặc đồng xu cuối là chẵn. Sau khi người chơi 1 nhặt được đồng xu mà mình chọn, người 2 luôn phải đối mặt với các đồng xu chẵn lẻ ở 2 đầu, Vì vậy, người chơi 1 đều có thể nhặt đồng xu từ đầu và sẽ đảm bảo không thua trò chơi




Tham

Những yêu cầu này giải thích tên của kỹ thuật: ở mỗi bước, nó gợi ý 1 cách” tham lam” chọn phương án thay thế tốt  nhất hiện có với hu vọn rằng một chuỗi các lựa chọn tối ưu cục bọ và mang lại giải pháp tối ưu( toàn cậu) cho toàn bộ vấn dề

* vấn đề đồ thị
* Thuật toán Dijkstra’s
* cây bao trùm
* thuật toán Prim

Thuật toán Prim

Prim khung tối thiểu prim là một trong những phương pháp hiệu quả để tìm cây khung tối thiểu của đồ thị

Thuật toán, tương tự như bất kỳ thuật toán đường đi ngắn nhất nào, bát đàu từ c1 đỉnh được đặt là gốc và đi qua tất cả cá đỉnh trong biểu đồ bằng cách xác định các cạnh liền kề có giá trị thấp nhất

Bước 1

Bước 2

Bước 3

Bước 4

Bước 5


Lực lượng force
Thuật toán lực lượng brute đúng như tên gọi của chúng - các phương pháp đơn giản để giải quyết vấn đề dựa vào sực mạnh tính toàn tuyệt đối và thử mọi khả năng thay vì các kỹ thuật nâng cao để nâng cao hieuen quả

* sắp xếp Bubble
* sắp xếp Selection
* tìm chiều rộng
* tìm chiều sâu

Sắp xếp bubble

Sắp xếp bubble là một thuật toán sắp xếp đơn giản giúp hoán đổi các phần tử liền kể liên tục nếu chúng sai thứ tự. ĐỘ phúc tạp về thời gian trung bình và trường hợp xấu nhất của thuật toán này khiến nó không phù hợp với các tập dự liệu lớn


Giả sử chúng ta cố sắp xếp các phàn tử theo thứ tự tăng dần

Bước 1

Bước 2

Bước 3

Bước 4


Code


Sắp Xếp lựa chọn

Sắp xếp lựa chọn alf thuật toán sắp xếp nó chọn các giá thành phần bé nhất trong danh sách chưa được sắp xếp trong mõi lần lặp và đặt các thành phần vào danh sách chưa được sắp xếp


Bước 1: đặt vào thành phần đầu như là tối thiểu

Bước 2: So sánh tối thiểu với thành phần thứ 3. lần nwuax, nếu giá trị thứ 3 bé nhất, thì chỉ định mức tối thiểu cho phần tử thứ 3, nếu không thì không làm gì cả. Quá trình tiếp tục hco dến phần tử cuối cùng

Bước 3: sau mỗi lần lặp, giá trị tối thiểu dduowjcd đặt ở phía trước danh sacawh chưa được sawspx ép



Bước 4 Cho sự lặp lại, việc thiết lập chỉ mục bắt đầu từ phần tử chưa được sắp xếp đầu tiên, Các bước 1-3 được lặp lại cho đến khi các phân từ được đặt vào đúng vị trí của chúng

Code


Duyệt rộng

Duyệt rộng là một chiến lược đơn giản trong đó nút gốc được mở rộng trước sau đó tất cả các nút kết thừa của nút gốc được mở rộng tiếp theo, sau đó là nút kế thừa chủa chúng

Thực hiện

* Rìa là Fifo, tức là những người đến cuối cùng
* Tìm keism cây( vấn đề, FIFO_QUEUE())


Duyệt Sâu

Duyệt chiều sâu hoặc truyền tảii theo chiều sâu là một thuật toán đệ quy để tìm kiếm tất cả các đỉnh của biểu đồ hoặc cấu trúc dữ liệu cây. Truyền tải có nghĩa là truy cập tất cả các nút của biểu đồ.

*Mở rộng nút chưa được mở rộng sâu nhất
*Việc tìm kiếm tiến hành ngay lập tức tới mức sâu nhất của cây tìm kiếm -> Các nút không có nút kế thừa
