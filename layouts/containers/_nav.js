export default [
  {
    _name: 'CSidebarNav',
    _children: [
      
      {
        _name: 'CSidebarNavTitle',
        _children: ['Loại và Cấp Di Sản']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Loại Di Sản',
        to: '/LoaiDiSan/',
        icon: 'cil-drop'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Cấp Di Sản',
        to: '/CapDiSan/',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Quản lý Di Sản']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Di Sản',
        to: '/DiSan/',
        icon: 'cil-drop'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Hoạt Động',
        to: '/HoatDong/',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Đánh Giá',
        to: '/DanhGia/',
        icon: 'cil-pencil'
      },
      
    ]
  }
]
