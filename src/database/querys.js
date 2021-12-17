export const querys = {
  getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  getAllPosts:` SELECT TOP(50)
  P.Post_Id,
  P.Post_Title,
  P.Post_Content,	
  P.Post_CreatedDate,	
  P.Post_UpdatedDate,	
  P.User_Id,	
  P.Catgory_Id,	
  P.SubCategory_Id,	
  P.Post_Chk1,	
  P.Post_Chk2,	
  P.Post_Chk3,	
  P.Post_Chk4,	
  P.Post_Chk5,	
  P.Post_Chk6,	
  P.Post_Chk7,	
  P.Post_IsPublish,	
  P.Post_CreatedBy,	
  C.Category_Id,	
  C.Category_Name,
  S.SubCatgory_Id,	
  S.SubCategory_Name,	
  I.Img_Id	,
  I.Img_IsSmallUrll,	
  I.Img_IsLargeUrl,	
  I.Img_Alt,	 
  T.Tag_Id,	
  T.Tag_Name,
  S1.SuperSubcat_Id	,
  S1.SuperSubcat_Name,	
  S1.SubCatgory_Id	
  FROM Tbl_Blog_Post p              
 LEFT JOIN Tbl_Blog_Category C ON p.Catgory_Id=C.Category_Id            
 LEFT JOIN Tbl_Blog_SubCategory S On  p.SubCategory_Id=S.SubCatgory_Id            
 LEFT JOIN Tbl_Blog_Image I ON  p.Post_Id  =I.Img_Id          
 LEFT JOIN Tbl_Blog_Tags T  ON p.Post_Id =T.Tag_Id        
 LEFT JOIN Blog_Super_Subcategory S1 ON p.SuperSubcat_Id =S1.SuperSubcat_Id       
  order by p.Post_Id desc`  
  };
