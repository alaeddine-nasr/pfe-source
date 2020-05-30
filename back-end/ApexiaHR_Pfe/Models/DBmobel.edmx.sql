
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 05/31/2020 00:39:41
-- Generated from EDMX file: C:\Users\ziedg\pfe-source\back-end\ApexiaHR_Pfe\Models\DBmobel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [ApexiaHRServiceProd_db];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_Employee_Department]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Employee] DROP CONSTRAINT [FK_Employee_Department];
GO
IF OBJECT_ID(N'[dbo].[FK_WorkDay_Employee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[WorkDay] DROP CONSTRAINT [FK_WorkDay_Employee];
GO
IF OBJECT_ID(N'[dbo].[FK_WorkSchedule_Department]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[WorkSchedule] DROP CONSTRAINT [FK_WorkSchedule_Department];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Department]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Department];
GO
IF OBJECT_ID(N'[dbo].[Employee]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Employee];
GO
IF OBJECT_ID(N'[dbo].[TimeSetting]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TimeSetting];
GO
IF OBJECT_ID(N'[dbo].[WorkDay]', 'U') IS NOT NULL
    DROP TABLE [dbo].[WorkDay];
GO
IF OBJECT_ID(N'[dbo].[WorkSchedule]', 'U') IS NOT NULL
    DROP TABLE [dbo].[WorkSchedule];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Company'
CREATE TABLE [dbo].[Company] (
    [CompanyID] int IDENTITY(1,1) NOT NULL,
    [CompanyLegalName] varchar(50)  NULL,
    [Address] varchar(50)  NULL,
    [City] nvarchar(max)  NOT NULL,
    [State] nvarchar(max)  NOT NULL,
    [PostalCode] int  NULL,
    [Country] nvarchar(max)  NOT NULL,
    [DateOfFormation] varchar(50)  NULL,
    [FiscalYearStart] smallint  NOT NULL,
    [PayrollFrequency] varchar(50)  NULL
);
GO

-- Creating table 'Department'
CREATE TABLE [dbo].[Department] (
    [DepartmentID] int IDENTITY(1,1) NOT NULL,
    [DepartmentName] varchar(50)  NULL,
    [CompanyID] int  NULL
);
GO

-- Creating table 'Employee'
CREATE TABLE [dbo].[Employee] (
    [EmployeeID] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(50)  NULL,
    [Email] varchar(50)  NULL,
    [Phone] varchar(50)  NULL,
    [Adress] varchar(50)  NULL,
    [DepartmentID] int  NOT NULL
);
GO

-- Creating table 'TimeSetting'
CREATE TABLE [dbo].[TimeSetting] (
    [Attendance] varchar(50)  NULL,
    [EmployeeBreak] varchar(50)  NULL,
    [WeekendOnAttendanceSheet] varchar(50)  NULL,
    [MaxLateArrivals] varchar(50)  NULL,
    [HighlightLateArrivals] varchar(50)  NULL,
    [CompanyID] int  NULL,
    [TimeSettingID] int IDENTITY(1,1) NOT NULL
);
GO

-- Creating table 'WorkDay'
CREATE TABLE [dbo].[WorkDay] (
    [WorkDayID] int IDENTITY(1,1) NOT NULL,
    [Checkin] varchar(50)  NULL,
    [Checkout] varchar(50)  NULL,
    [Breaks] nvarchar(50)  NULL,
    [Lunch] nvarchar(50)  NULL,
    [TotalHoursWorked] int  NULL,
    [OvetimeHours] int  NULL,
    [Comments] varchar(max)  NULL,
    [Date] varchar(50)  NULL,
    [EmployeeID] int  NOT NULL
);
GO

-- Creating table 'WorkSchedule'
CREATE TABLE [dbo].[WorkSchedule] (
    [WorkScheduleID] int IDENTITY(1,1) NOT NULL,
    [WeekendDays] varchar(50)  NULL,
    [HoursPerDay] int  NULL,
    [WeekStarts] varchar(50)  NULL,
    [NumberWorkDays] int  NULL,
    [DayStarts] varchar(50)  NULL,
    [Breaks] varchar(50)  NULL,
    [Lunch] varchar(50)  NULL,
    [DepartmentID] int  NULL,
    [CompanyID] int  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [CompanyID] in table 'Company'
ALTER TABLE [dbo].[Company]
ADD CONSTRAINT [PK_Company]
    PRIMARY KEY CLUSTERED ([CompanyID] ASC);
GO

-- Creating primary key on [DepartmentID] in table 'Department'
ALTER TABLE [dbo].[Department]
ADD CONSTRAINT [PK_Department]
    PRIMARY KEY CLUSTERED ([DepartmentID] ASC);
GO

-- Creating primary key on [EmployeeID] in table 'Employee'
ALTER TABLE [dbo].[Employee]
ADD CONSTRAINT [PK_Employee]
    PRIMARY KEY CLUSTERED ([EmployeeID] ASC);
GO

-- Creating primary key on [TimeSettingID] in table 'TimeSetting'
ALTER TABLE [dbo].[TimeSetting]
ADD CONSTRAINT [PK_TimeSetting]
    PRIMARY KEY CLUSTERED ([TimeSettingID] ASC);
GO

-- Creating primary key on [WorkDayID] in table 'WorkDay'
ALTER TABLE [dbo].[WorkDay]
ADD CONSTRAINT [PK_WorkDay]
    PRIMARY KEY CLUSTERED ([WorkDayID] ASC);
GO

-- Creating primary key on [WorkScheduleID] in table 'WorkSchedule'
ALTER TABLE [dbo].[WorkSchedule]
ADD CONSTRAINT [PK_WorkSchedule]
    PRIMARY KEY CLUSTERED ([WorkScheduleID] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [CompanyID] in table 'Department'
ALTER TABLE [dbo].[Department]
ADD CONSTRAINT [FK_Department_Company]
    FOREIGN KEY ([CompanyID])
    REFERENCES [dbo].[Company]
        ([CompanyID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Department_Company'
CREATE INDEX [IX_FK_Department_Company]
ON [dbo].[Department]
    ([CompanyID]);
GO

-- Creating foreign key on [CompanyID] in table 'TimeSetting'
ALTER TABLE [dbo].[TimeSetting]
ADD CONSTRAINT [FK_TimeSetting_Company]
    FOREIGN KEY ([CompanyID])
    REFERENCES [dbo].[Company]
        ([CompanyID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TimeSetting_Company'
CREATE INDEX [IX_FK_TimeSetting_Company]
ON [dbo].[TimeSetting]
    ([CompanyID]);
GO

-- Creating foreign key on [CompanyID] in table 'WorkSchedule'
ALTER TABLE [dbo].[WorkSchedule]
ADD CONSTRAINT [FK_WorkSchedule_Company]
    FOREIGN KEY ([CompanyID])
    REFERENCES [dbo].[Company]
        ([CompanyID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_WorkSchedule_Company'
CREATE INDEX [IX_FK_WorkSchedule_Company]
ON [dbo].[WorkSchedule]
    ([CompanyID]);
GO

-- Creating foreign key on [DepartmentID] in table 'Employee'
ALTER TABLE [dbo].[Employee]
ADD CONSTRAINT [FK_Employee_Department]
    FOREIGN KEY ([DepartmentID])
    REFERENCES [dbo].[Department]
        ([DepartmentID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Employee_Department'
CREATE INDEX [IX_FK_Employee_Department]
ON [dbo].[Employee]
    ([DepartmentID]);
GO

-- Creating foreign key on [DepartmentID] in table 'WorkSchedule'
ALTER TABLE [dbo].[WorkSchedule]
ADD CONSTRAINT [FK_WorkSchedule_Department]
    FOREIGN KEY ([DepartmentID])
    REFERENCES [dbo].[Department]
        ([DepartmentID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_WorkSchedule_Department'
CREATE INDEX [IX_FK_WorkSchedule_Department]
ON [dbo].[WorkSchedule]
    ([DepartmentID]);
GO

-- Creating foreign key on [EmployeeID] in table 'WorkDay'
ALTER TABLE [dbo].[WorkDay]
ADD CONSTRAINT [FK_WorkDay_Employee]
    FOREIGN KEY ([EmployeeID])
    REFERENCES [dbo].[Employee]
        ([EmployeeID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_WorkDay_Employee'
CREATE INDEX [IX_FK_WorkDay_Employee]
ON [dbo].[WorkDay]
    ([EmployeeID]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------