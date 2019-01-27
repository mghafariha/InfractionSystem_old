import React from 'react';

export const AllowedViolations=[
    {accessor:'Index',Header:'اندکس',type:'String',group:'Moshtarak'},
// {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',group:'Moshtarak',Options:'AreaStudies',TitleField:'Title'},
{accessor:'Plain',Header:'دشت',type:'Lookup',group:'Moshtarak',Options:'Plains',TitleField:'Title'},
{accessor:'OwnerName',Header:'نام و نام خانوادگی مالک',type:'String',group:'Moshtarak'},
// {accessor:'City',Header:'شهرستان',type:'Lookup',group:'Moshtarak',Options:'Cities',TitleField:'Title'},
{accessor:'Village',Header:'روستا',type:'String',group:'Moshtarak'},
{accessor:'Subscribe',Header:'شماره اشتراک',type:'String',group:'Moshtarak'},
{accessor:'LicenseNumber',Header:'شماره پروانه بهره برداری/حفر/مجوزصادره',type:'String',group:'Moshtarak'},
{accessor:'LicenseDate',Header:'تاریخ پروانه بهره برداری/حفر/مجوزصادره',type:'DateTime',group:'Moshtarak'},
{accessor:'Longitude',Header:'طول جغرافیایی',type:'Decimal',group:'Moshtarak'},
{accessor:'Latitude',Header:'عرض جغرافیایی',type:'Decimal',group:'Moshtarak'},
{accessor:'Pipe',Header:'قطر لوله آبده قبلی',type:'Decimal',group:'Moshtarak'},
{accessor:'EnginePower',Header:'قدرت موتورقبلی',type:'Decimal',group:'Moshtarak'},
{accessor:'TypeLicense',Header:'نوع مجوز',type:'Select',group:'Moshtarak' ,Options:'پروانه بهره برداری ,پروانه حفر,مجوز صادره فرم 1'},
{accessor:'Cultivated',Header:'سطح زیر کشت',type:'Decimal',group:'Moshtarak'},
{accessor:'CultivateType',Header:'نوع کشت',type:'Select',group:'Moshtarak',Options:'زراعی ,باغی,  زراعی وباغی'},
{accessor:'Industry',Header:'صنعت و خدمات',type:'String',group:'Moshtarak'},
{accessor:'Drinking',Header:'شرب',type:'Select',group:'Moshtarak',Options:'شهری , روستایی'},
{accessor:'DebiMojaz',Header:'آبدهی مجاز (لیتر بر ثانیه)',type:'Decimal',group:'Moshtarak'},
{accessor:'WorkHours',Header:'ساعت كاركرد ',type:'Decimal',group:'Moshtarak'},
{accessor:'ArtifactsType',Header:'نو ع منصوبات مجاز',type:'Select',group:'Moshtarak',Options:'دیزلی, برقی'},
{accessor:'WellDepth',Header:'عمق چاه',type:'Decimal',group:'Moshtarak'},
{accessor:'DugMethod',Header:'روش حفر',type:'Select',group:'Moshtarak',Options:'دستی, دستگاهی'},
{accessor:'TypeWell',Header:'نوع چاه',type:'Select',group:'Moshtarak',Options:'حریمی, کمکی'},
{accessor:'Volume',Header:'حجم برداشت مجاز  سالانه(هزارمترمکعب)',type:'Decimal',group:'Moshtarak'},
{accessor:'Description',Header:'توضیحات',type:'String',group:'Moshtarak'},
{accessor:'CultivatedFalse',Header:'سطح زیر کشت غیر مجاز',type:'Decimal',group:'Ezafe'},
{accessor:'CultivateTypeFalse',Header:'نوع کشت غیر مجاز',type:'Select',group:'Ezafe',Options:'زراعی, باغی, زراعی وباغی'},
{accessor:'UseFalse',Header:'نوع مصرف  غیر مجاز',type:'Select',group:'Ezafe',Options:'صنعتی, کشاورزی, دامداری ,شرب, سایر'},
{accessor:'DebiPresent',Header:'آبدهي فعلي(لیتردرثانیه) ',type:'Decimal',group:'Ezafe'},
{accessor:'VolumePresent',Header:'حجم برداشت فعلي(هزارمتر مکعب)',type:'Decimal',group:'Ezafe'},
{accessor:'ChangeUse',Header:'تغییر نوع مصرف',type:'Select',group:'Ezafe',Options:'دارد, ندارد'},
{accessor:'UseTiny',Header:'ریز مصرف',type:'String',group:'Ezafe'},
{accessor:'Overdrawn',Header:'حجم اضافه برداشت',type:'Decimal',group:'Ezafe'},
{accessor:'TypeMeter',Header:'نوع کنتور',type:'Select',group:'AdamNasb',Options:'حجمی هوشمند, حجمی مکانیکی,هوشمند آب و برق,سایر'},
{accessor:'MeterCompany',Header:'نام شرکت سازنده يا پيمانکار',type:'String',group:'AdamNasb'},
{accessor:'DateInstallation',Header:'تاريخ نصب',type:'DateTime',group:'AdamNasb'},
{accessor:'ChargeMeter',Header:'شارژ',type:'Select',group:'AdamNasb',Options:'دارد,ندارد'},
{accessor:'NumberMeter',Header:'قرائت',type:'Decimal',group:'AdamNasb'},
{accessor:'PlaceMeter',Header:'محل تهیه کنتور',type:'Select',group:'AdamNasb',Options:'انبار, تبصره  8,هزینه متقاضی'},
{accessor:'Overdrawn',Header:'اضافه برداشت قبلي(هزار متر مکعب در سال)',type:'Decimal',group:'AdamNasb'},
{accessor:'Saving',Header:'صرفه جويي با نصب کنتور (هزار متر مکعب در سال)',type:'Decimal',group:'AdamNasb'},
{accessor:'PlumbMeter',Header:'پلمپ کنتور',type:'Select',group:'AdamNasb',Options:'دارد,ندارد'},
{accessor:'PipeNew',Header:'قطر لوله آبده جدید',type:'Decimal',group:'Mansubat'},
{accessor:'EnginePowerNew',Header:'قدرت موتور جدید',type:'Decimal',group:'Mansubat'},
{accessor:'VolumeSaving',Header:'مقادير حجم آب صرفه جویی شده',type:'Decimal',group:'Mansubat'},
{accessor:'TransferLine',Header:'طول خط انتقال آب',type:'Decimal',group:'EnteghalAb'},
{accessor:'FloorBreaker',Header:'میزان کف شکنی/عمق فعلی',type:'Decimal',group:'KafShekani'},
{accessor:'WaterSupply',Header:'آب فروشی',type:'Decimal',group:'AbForoushi'},
{accessor:'UserFalse',Header:'کاربری غیر مجاز',type:'Select',group:'TaghirKarbari',Options:'صنعتی, کشاورزی, دامداری ,شرب, سایر'},
{accessor:'EndDate',Header:'تاریخ اتمام مدت پروانه بهره برداری',type:'DateTime',group:'AdamTamdid'},
{accessor:'LongitudeViolation',Header:'طول جغرافیایی تخلف',type:'Decimal',group:'TaghirMahal'},
{accessor:'LatitudeViolation',Header:'عرض جغرافیایی تخلف',type:'Decimal',group:'TaghirMahal'},
{accessor:'VolumOfWell',Header:'حجم برداشت از چاه',type:'Decimal',group:'AbShirin'},
{accessor:'WasteWater',Header:'حجم پساب',type:'Decimal',group:'AbShirin'},
{accessor:'VolumeFiltration',Header:'حجم آب تصفیه شده',type:'Decimal',group:'AbShirin'}]

export const NotAllowedViolations=[{accessor:'Index',Header:'شماره پرونده',type:'String',group:'MoshtarakGhair'},
// {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',group:'MoshtarakGhair'},
{accessor:'Plain',Header:'دشت',type:'Lookup',group:'MoshtarakGhair',Options:'Plains',TitleField:'Title'},
{accessor:'OwnerName',Header:'نام و نام خانوادگی متخلف',type:'String',group:'MoshtarakGhair'},
// {accessor:'City',Header:'شهرستان',type:'Lookup',group:'MoshtarakGhair'},
{accessor:'Village',Header:'روستا',type:'String',group:'MoshtarakGhair'},
{accessor:'Longitude',Header:'طول جغرافیایی',type:'Decimal',group:'MoshtarakGhair'},
{accessor:'Latitude',Header:'عرض جغرافیایی',type:'Decimal',group:'MoshtarakGhair'},
{accessor:'DugDate',Header:'تاریخ حفر ',type:'DateTime',group:'MoshtarakGhair'},
{accessor:'WorkHours',Header:'ساعت كاركرد ',type:'Decimal',group:'MoshtarakGhair'},
{accessor:'TypeUse',Header:'نوع مصرف ',type:'Select',group:'MoshtarakGhair',Options:'صنعتی, کشاورزی, دامداری ,شرب, سایر'},
{accessor:'StartDateOperation',Header:'تاریخ شروع بهره برداری',type:'DateTime',group:'MoshtarakGhair'},
{accessor:'DebiMoment',Header:'آبدهی لحظه ای چاه (لیتردرثانیه)',type:'Decimal',group:'MoshtarakGhair'},
{accessor:'VolumeSaved',Header:'حجم آب صرفه جویی شده سالانه(هزارمتر مکعب)',type:'Decimal',group:'MoshtarakGhair'},
{accessor:'AquiferDamage',Header:'خسارت آبخوان',type:'Select',group:'MoshtarakGhair',Options:'اخذ شده, اخذ نشده'},
{accessor:'Description',Header:'توضیحات',type:'String',group:'MoshtarakGhair'},
{accessor:'SerialPlumb',Header:'شماره سریال پلمپ',type:'String',group:'Plumb'},
{accessor:'years',Header:'سال حفر چاه',type:'Select',group:'Masloub',Options:'قبل 85 سال ,بعد سال85 '},
{accessor:'UsePresent',Header:'میزان مصرف آب فعلی mcm',type:'Decimal',group:'Masloub'},
{accessor:'WellDepthViolation',Header:'عمق چاه',type:'Decimal',group:'Masloub'},
{accessor:'TypeWellViolation',Header:'نوع چاه',type:'Select',group:'Masloub',Options:'حریمی , کمکی'},
{accessor:'WellPosition',Header:'وضعیت چاه',type:'Select',group:'Masloub',Options:'فعال ,غیر فعال'},
{accessor:'EngineType',Header:'نوع موتور',type:'Select',group:'Masloub',Options:'دیزلی, برقی'},
{accessor:'DateFull',Header:'تاریخ پر و مسلوب المنفعه نمودن چاه',type:'DateTime',group:'Masloub'},
{accessor:'AnnualDischarge',Header:'تخلیه سالانه (هزار متر مکعب)',type:'Decimal',group:'Masloub'},
{accessor:'HistoryBlocked',Header:'سابقه انسداد',type:'Select',group:'Masloub',Options:'دارد,ندارد'}]

  export const wellTypes=[{key:null,value:'انتخاب'},{key:'legal',value:'مجاز'},{key:'illegal',value:'غیر مجاز'}]
 
    export const infractionTypesLegal = [
    {
      
      accessor: 'AbForoushi',
      Header: 'آب فروشی',
    },
    {
     
      accessor: 'Ezafe',
      Header: 'اضافه برداشت',
    },
    {
    
      accessor: 'AdamNasb',
      Header: 'عدم نصب کنتور',
    },
    {
     
      accessor: 'Mansubat',
      Header: 'منصوبات غیر مجاز',
    },
    {
        
        accessor: 'EnteghalAb',
        Header: 'انتقال آب',
      },
      {
       
        accessor: 'KafShekani',
        Header: 'کف شکنی',
      },
      {
        
        accessor: 'TaghirKarbari',
        Header: 'تغییر کاربری',
      },
      {
       
        accessor: 'AdamTamdid',
        Header: 'عدم تمدید پروانه',
      },
      {
       
        accessor: 'TaghirMahal',
        Header: 'تغییر محل',
      },
      {
       
        accessor: 'AbShirin',
        Header: 'آب شیرین کن',
      },
  ];
  export const infractionTypesIllegal = [
    
    {
      accessor: 'Plumb',
      Header: 'پلمپ چاههای غیر مجاز',
    },
    {
      accessor: 'Masloub',
      Header: 'پر و مسلوب المنفعه بودن چاههای غیر مجاز',
    }
  ];

  export const Ezafe=[{accessor:'OwnerName',Header:'نام و نام خانوادگی مالک',type:'String'},
       {accessor:'Index',Header:'اندکس',type:'String'},
    {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
    {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'},
    {accessor:'Overdrawn',Header:'حجم اضافه برداشت',type:'Decimal'}]
    
    export const  AdamNasb=[{accessor:'OwnerName',Header:'نام و نام خانوادگی مالک',type:'String'},
         {accessor:'Index',Header:'اندکس',type:'String'},
      {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
      {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'},
   {accessor:'Volume',Header:'حجم برداشت مجاز  سالانه(هزارمترمکعب)',type:'Decimal'}]
   


   export const Mansubat=[{accessor:'OwnerName',Header:'نام و نام خانوادگی مالک',type:'String'},
           {accessor:'Index',Header:'اندکس',type:'String'},
        {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
        {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'},
           {accessor:'ArtifactsType',Header:'نو ع منصوبات مجاز',type:'Select',Options:'دیزلی, برقی'},     
             {accessor:'EnginePowerNew',Header:'قدرت موتور جدید',type:'Decimal'}]


             export const EnteghalAb=[{accessor:'OwnerName',Header:'نام و نام خانوادگی مالک',type:'String'},
           {accessor:'Index',Header:'اندکس',type:'String'},
           {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
           {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'},
          {accessor:'TransferLine',Header:'طول خط انتقال آب',type:'Decimal'}]
     
     
     
        export const KafShekani=[{accessor:'OwnerName',Header:'نام و نام خانوادگی مالک',type:'String'},
           {accessor:'Index',Header:'اندکس',type:'String'},
        {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
        {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'},
           {accessor:'FloorBreaker',Header:'میزان کف شکنی/عمق فعلی',type:'Decimal'}]

     

           export const AbForoushi=[{accessor:'OwnerName',Header:'نام و نام خانوادگی مالک',type:'String'},
           {accessor:'Index',Header:'اندکس',type:'String'},
        {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
        {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'}] 
     
     
 
     
        export const TaghirKarbari=[{accessor:'OwnerName',Header:'نام و نام خانوادگی مالک',type:'String'},
           {accessor:'Index',Header:'اندکس',type:'String'},
        {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
        {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'}]
     
     
        export const AdamTamdid=[{accessor:'OwnerName',Header:'نام و نام خانوادگی مالک',type:'String'},
           {accessor:'Index',Header:'اندکس',type:'String'},
        {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
        {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'},
     {accessor:'EndDate',Header:'تاریخ اتمام مدت پروانه بهره برداری',type:'DateTime'},
     {accessor:'UserFalse',Header:'کاربری غیر مجاز',type:'Select',Options:'صنعتی, کشاورزی, دامداری ,شرب, سایر'}]


     export const AbShirin=[{accessor:'OwnerName',Header:'نام و نام خانوادگی مالک',type:'String'},
     {accessor:'Index',Header:'اندکس',type:'String'},
     {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
     {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'},
     ]

      export const TaghirMahal=[{accessor:'OwnerName',Header:'نام و نام خانوادگی مالک',type:'String'},
          {accessor:'Index',Header:'اندکس',type:'String'},
          {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
          {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'},
          {accessor:'Longitude',Header:'طول جغرافیایی',type:'Decimal'},
              {accessor:'Latitude',Header:'عرض جغرافیایی',type:'Decimal'},
          {accessor:'LongitudeViolation',Header:'طول جغرافیایی تخلف',type:'Decimal'},
              {accessor:'LatitudeViolation',Header:'عرض جغرافیایی تخلف',type:'Decimal'},
      ]


     export const Plumb=[{accessor:'OwnerName',Header:'نام و نام خانوادگی متخلف',type:'String'},
                      {accessor:'Index',Header:'شماره پرونده',type:'String'},
                      {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
                      {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'},
                      {accessor:'SerialPlumb',Header:'شماه سریال پلمپ',type:'String'}]


export const Masloub=[{accessor:'OwnerName',Header:'نام و نام خانوادگی متخلف',type:'String'},
                      {accessor:'Index',Header:'شماره پرونده',type:'String'},
                      {accessor:'City',Header:'شهرستان',type:'Lookup',Options:'Cities',TitleField:'Title'},
                      {accessor:'StudyArea',Header:'محدوده مطالعاتی',type:'Lookup',Options:'AreaStudies',TitleField:'Title'},
                      {accessor:'DateFull',Header:'تاریخ پر و مسلوب المنفعه نمودن چاه',type:'DateTime'},
       {accessor:'WellDepthViolation',Header:'عمق چاه',type:'Decimal'},
       {accessor:'EngineType',Header:'نوع موتور',type:'Select',Options:'دیزلی, برقی'}]


///

