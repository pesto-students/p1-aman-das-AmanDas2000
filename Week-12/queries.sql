use pesto;

select * from items where itemWeight=(select min(itemWeight) from items);

select * from warehouse where cId=(select cId from city where cityName='Pune');

select * from items where itemNo in (select itemNo from orderItem where oId in (select orders.oId from orders inner join customer where orders.cNo = customer.cNo and cName="Mr. Patil"));

select * from warehouse where wId = (select wId from store group by wId having count(wId)=(select max(mycount) from (select count(wId)as mycount from store group by wId) as maxStore));

select * from items where itemNo = (select itemNo from orderItem group by itemNo having count(itemNo) = (select min(mycount) from (select count(itemNo) as mycount, itemNo from orderItem group by itemNo) as minTable));

select orderItem.oId, orders.oDate, orderItem.quantity, customer.cNo, customer.cName, items.itemDescription from (((customer inner join orders on customer.cNo=orders.cNo)inner join orderItem on orders.oId = orderItem.oId) inner join items on orderItem.itemNo = items.itemNo) order by cNo;