from rest_framework import routers
from .api import BudgetViewSet, RecordView

router = routers.DefaultRouter()
router.register('api/budget', BudgetViewSet, 'budget')
# router.register('api/budget', BudgetViewSet.as_view({'get': 'retrieve'}))
router.register('api/record', RecordView, 'record')


urlpatterns = router.urls