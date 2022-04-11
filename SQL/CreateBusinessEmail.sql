USE [MedSolution]
GO

/****** Object:  Table [dbo].[business_email]    Script Date: 4/6/2022 3:43:03 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[business_email](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[email] [nvarchar](500) NOT NULL,
	[service_id] [nvarchar](50) NOT NULL,
	[user_id] [nvarchar](200) NOT NULL,
	[access_token] [nvarchar](500) NOT NULL,
	[is_in_use] [bit] NOT NULL,
 CONSTRAINT [PK_business_email] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


