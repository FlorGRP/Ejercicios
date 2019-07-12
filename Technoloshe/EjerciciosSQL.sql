/* Ejercitacion
1. Determinar cuentos pedidos tuvo el vendedor 'Suyama' en el año 1996.
2. Mostrar un ranking de los primeros 10 productos (nombres y cantidad de unidades) mas pedidos en 1997, 
   ordenados descendientes por cantidad de unidades pedidas.
3. Mostrar los productos (ID y nombre) del proveedor 'Tokio Traders' que hayan sido enviados por la compañia
   'Federal Shipping'.
4. Mostrar los clientes (nombre de compañia) en forma alfabetica con sus importes totales por cada pedido. 

*/

/*Ejercicio2
select 
top 10 with ties p.ProductName as Producto,
sum(od.Quantity) as CantidadTotal
from Products as p 
inner join [Order Details] as od on p.ProductID=od.ProductID
inner join Orders as o on od.OrderID=o.OrderID
where year(o.OrderDate)=1997
group by p.ProductName
order by CantidadTotal desc */

/*Ejercicio1
select
count(o.OrderID) as PedidosTotales
from Orders as o
inner join Employees as e on e.EmployeeID=o.EmployeeID
where year(o.OrderDate)=1996 and e.LastName='Suyama' */

/*Ejercicio3 

select
p.ProductID as ID,
p.ProductName as Producto
from Products as p
inner join Suppliers as su on su.SupplierID=p.SupplierID
inner join [Order Details] as od on od.ProductID=p.ProductID
inner join Orders as o on o.OrderID=od.OrderID
inner join Shippers as sh on sh.ShipperID=o.ShipVia
where su.CompanyName='Tokio Traders' and sh.CompanyName='Federal Shipping' */


/*Ejercicio4 Version totales por cliente

select
distinct c.CompanyName as Cliente,
round(sum(od.Quantity*od.UnitPrice*(1-od.Discount)),2) as Total
from Customers as c
inner join Orders as o on o.CustomerID=c.CustomerID
inner join [Order Details] as od on od.OrderID=o.OrderID
group by c.CompanyName
order by Cliente */

/*Ejercicio4 hecho en clase

select
distinct c.CompanyName as Cliente,
o.OrderID,
sum(od.Quantity*od.UnitPrice*(1-od.Discount)) as Total
from Customers as c
inner join Orders as o on o.CustomerID=c.CustomerID
inner join [Order Details] as od on od.OrderID=o.OrderID
group by c.CompanyName,o.OrderID
order by Cliente */