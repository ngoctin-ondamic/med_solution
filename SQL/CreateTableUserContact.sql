USE [MedSolution]
GO

/****** Object:  Table [dbo].[user_contact]    Script Date: 4/5/2022 4:37:14 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[user_contact](
	[id] [nvarchar](20) NOT NULL,
	[fullname] [nvarchar](100) NULL,
	[email] [nvarchar](200) NULL,
	[phone_number] [nvarchar](15) NULL,
	[description] [nvarchar](4000) NULL,
	[subject] [nvarchar](4000) NULL,
	[type_contact] [int] NULL,
	[insert_date] [nvarchar](50) NULL,
 CONSTRAINT [PK_user_contact] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


